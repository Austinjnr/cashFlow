class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
 
  def index
    users = User.all
    render json: users
  end
    
  def authenticate
    user = User.find_by(email: params[:email])

    if user.nil?
      user_not_found
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      role = user.email.include?('admin') ? 'admin' : 'user'
      render json: { message: role, session: session[:user_id] }, status: :ok
    else
      record_invalid("Invalid password")
    end

  rescue => e
    render json: { error: "Login failed" }, status: :bad_request
  end

  def create
    begin
      user = User.new(user_params)
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]
      user.save!

      session[:user_id] = user.id
      session[:email] = user.email
      render json: { status: :created, message: "User successfully registered", user: user }
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    rescue ActiveRecord::RecordNotUnique => e
      render json: { errors: [e.message] }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(session[:user_id]) || User.find_by([session[:email]])
    render json: user
  end

  def destroy
    session[:user_id] = nil
    head :no_content
  end

  private

  def user_params
    params.require(:user).permit(:username, :role, :email, :password, :password_confirmation)
  end

  def record_invalid(invalid)
    render json: { errors: invalid }, status: :unprocessable_entity
  end

  def user_not_found
    render json: { errors: "Account not found for that email address" }, status: :not_found
  end

  def not_found
    render json: { error: "User Not Found" }, status: :unauthorized
  end
end
