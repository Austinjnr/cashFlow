Rails.application.routes.draw do
#wallet 
  resources :wallets do
    member do
      post 'top_up'
      post 'send_money'
    end
  end
 
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
  get '/accounts', to: 'accounts#user_account'
end
