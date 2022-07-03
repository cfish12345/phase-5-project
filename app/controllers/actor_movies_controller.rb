class ActorMoviesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordNotFound, with: :record_invalid
    
    def show
        actormovie = ActorMovie.find_by(id: params[:id])
        render json: actormovie, include: :movie, status: :ok
    end

    def index
        render json: ActorMovie.all, include: :actor, status: :ok
    end

    private

    def actormovie_params
        params.permit(:actor_id, :movie_id)
    end

    def record_not_found
        render json: { error: "ActorMovie not found" }, status: 404
    end

    def record_invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
