Rails.application.routes.draw do
  # Wallet routes
  resources :wallets
  post 'wallets/:account_id', to: 'wallets#create'
  
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
  post '/accounts/:user_id', to: 'accounts#create'
  delete '/userprofile/:user_id/:id', to: 'accounts#destroy'
  get '/accounts', to: 'accounts#user_account'
end
