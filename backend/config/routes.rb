Rails.application.routes.draw do
  resources :wallets
  resources :users, only: [:index]
  resources :transactions, only: [:index, :create]
  resources :beneficiaries, only: [:index, :create]
  resources :accounts , only:[:index, :create, :update , :destroy , :show] , param: :id
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
  post '/login', to: "users#authenticate"
  delete '/logout', to: "users#destroy"
  post '/register' , to: "users#create"
  get  'users' , to: "users#index"
  # Routes for Transactions
  get 'transactions', to: 'transactions#index'
  post 'transactions', to: 'transactions#create'
  get 'transactions/:id', to: 'transactions#show'
  put 'transactions/:id', to: 'transactions#update'
  delete 'transactions/:id', to: 'transactions#destroy'
  # Routes for Beneficiaries
  get 'beneficiaries', to: 'beneficiaries#index'
  post 'beneficiaries', to: 'beneficiaries#create'
  get 'beneficiaries/:id', to: 'beneficiaries#show'
  put 'beneficiaries/:id', to: 'beneficiaries#update'
  delete 'beneficiaries/:id', to: 'beneficiaries#destroy'


end
