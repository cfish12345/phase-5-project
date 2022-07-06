class MoviesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordNotFound, with: :record_invalid
before_action :authorized, only:[:index]
    def index
        render json: Movie.all, status: :ok
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie, status: :ok
    end

    def create
        movie = Movie.create!(movie_params)
        if movie
            render json: movie, status: :created
        else
            render json: { error: "Movie not created" }, status: :unprocessable_entity
        end
    end

    def update
        movie = Movie.find(params[:id])
        if movie
            movie.update!(movie_params)
            render json: movie, status: :ok
        else
            render json: {error: "Not Updated" }, status: :unprocessable_entity
        end
    end

    private

    def movie_params
        params.permit(:title, :actors, :genre, :image_url, :director)
    end

    def record_not_found
        render json: { error: "Movie not found" }, status: 404
    end

    def record_invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
