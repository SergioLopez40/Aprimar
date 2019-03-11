Rails.application.routes.draw do

  #resources :usuarios
  resources :diets


  #devise_for :admin_users, ActiveAdmin::Devise.config
  #ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post  '/usuarios/update/:id'       => 'usuarios#updateDistance'
  get  '/usuarios/:id'       => 'usuarios#show'
  get  '/usuarios'       => 'usuarios#index'
  
end
