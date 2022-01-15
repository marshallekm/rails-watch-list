Rails.application.routes.draw do
  resources :lists, only: [:index, :new, :show, :create]
end
