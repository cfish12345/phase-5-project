class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
skip_before_action :authorized, only: [:create]

    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            reviews = user.reviews.order(:rating)
        else
            reviews = Review.all
        end
        render json: reviews, include: :movie, status: :ok
    end

    def show
        if params[:movie_id]
            movie = Movie.find(params[:movie_id])
            reviews = movie.reviews.find(params[:id])
        else
            reviews = Review.find(params[:id])
        end
            render json: reviews, include: :movie, status: :ok
    end

    def create
        review = Review.create!(review_params)
        if review
            render json: review, status: :created
        else
            render json: {error: "Invalid review" }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review
            review.destroy
            render json: {}
        else
            render json: {error: "Review not found" }, status: :not_found
        end
    end

    

    private

    def review_params
        params.permit(:user_id, :movie_id, :rating, :description)
    end

    def record_not_found
        render json: { error: "Review not found" }, status: 404
    end
end
