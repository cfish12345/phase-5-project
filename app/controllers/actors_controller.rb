class ActorsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordNotFound, with: :record_invalid

    def index
        actor = Actor.all.order(:created_at)
        render json: actor, status: :ok
    end

    def show
        actor = Actor.find(params[:id])
        render json: actor, status: :ok
    end

    def create
        actor = Actor.create!(actor_params)
        render json: actor, status: :created
    end
    private

    def actor_params
        params.permit(:name, :image_url)
    end

    def record_not_found
        render json: { error: "Actor not found" }, status: 404
    end

    def record_invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
