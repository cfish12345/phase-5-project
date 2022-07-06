Rails.application.routes.draw do
  resources :actor_movies, only: [:show, :index]
  resources :actors, only:[:index, :show, :create]
  resources :reviews, only:[:index, :show, :create, :destroy]

  resources :users, except: [:delete] do
    resources :reviews, only: [:index, :create]
  end

  resources :movies, only:[:index, :show, :create, :update] do
    resources :reviews, only:[:index, :show]
  end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "/me", to: "users#show"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
