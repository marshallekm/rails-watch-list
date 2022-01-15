Rails.application.routes.draw do
  root to:"lists#index"
  resources :lists, only: [:index, :new, :show, :create] do
    resources :bookmarks, only: [:create, :new]
  end
  resources :bookmarks, only: [:destroy]
end
