require 'action_cable'

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private

    def find_verified_user
      if verified_user = User.find_by(email: request.params[:email])
        verified_user
      else
        reject_unauthorized_connection
      end
    end
  end
end