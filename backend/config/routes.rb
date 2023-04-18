Rails.application.routes.draw do
  resources :accounts , only:[:index, :create, :update , :destroy , :show] , param: :id
  # Routes for users
  post '/login', to: "users#authenticate"
  delete '/logout', to: "users#destroy"
  post '/register' , to: "users#create"
  get  'users' , to: "users#index"
end
