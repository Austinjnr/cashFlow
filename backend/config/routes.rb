Rails.application.routes.draw do
#wallet 
  resources :wallets , only: [:index], param: :id

  get '/statistics', to: 'wallets#wallet_statistics'

    post "/deposit", to: "wallets#deposit"
    post "send/:receiver_account_id", to: "wallets#send_money"
 
  # User routes
  resources :users, only: [:index], param: :id
  post '/register', to: 'users#create'
  post '/login', to: 'users#authenticate'
  get '/user', to: 'users#show'
  delete '/logout', to: 'users#destroy'
  
  
  # Transaction routes
  resources :transactions
  post "transactions/:account_id", to: "transactions#create"
  # Beneficiary routes
  resources :beneficiaries
  post 'beneficiaries/:account_id', to: 'beneficiaries#create'
  # Account routes
  
  resources :accounts, only: [:create, :update, :destroy, :show], param: :id 
  get '/userprofile/:user_id', to: 'accounts#index'
  delete '/accounts/:user_id/:id', to: 'accounts#destroy'
  post  'send-money/account_id', to: 'wallets#send-money'
  post '/accounts/:user_id', to: 'accounts#create'
  delete '/userprofile/:user_id/:id', to: 'accounts#destroy'

  get '/accounts', to: 'accounts#user_account'
end
