Rails.application.routes.draw do
  get 'home/index'
  resources :users
  root "home#index"
end
