Rails.application.routes.draw do
  resources :accounts
  resources :users
  get 'render/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'render#index'
end
