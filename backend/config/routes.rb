Rails.application.routes.draw do
  resources :accounts
  # Routes for users
  post '/login', to: "users#authenticate"
  delete '/logout', to: "users#destroy"
  post '/register' , to: "users#create"
  get  'users' , to: "users#index"
end
