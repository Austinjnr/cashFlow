Rails.application.routes.draw do
  resources :wallets do
    member do
      post 'top_up'
      post 'send_money'
    end
  end
  resources :users, only: [:index],param: :id
  resources :transactions
  resources :beneficiaries
  resources :accounts , only:[ :create, :update , :destroy , :show] , param: :id 
  get "/userprofile/:user_id", to: "accounts#index"
  # Routes for users
  post '/accounts/:user_id' , to: "accounts#create"
  get '/accounts', to: "accounts#user_account"
  post '/login', to: "users#authenticate"
  delete '/logout', to: "users#destroy"
  get "/user", to: "users#show"
  post '/register' , to: "users#create"
  get  'users' , to: "users#index"
end
