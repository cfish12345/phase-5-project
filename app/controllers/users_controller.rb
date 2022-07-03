class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordNotFound, with: :record_invalid
wrap_parameters format: []
skip_before_action :authorized, only: [:create, :index, :show]

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        if user
            user.update!(user_params)
            render json: user, status: :ok
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password, :name, :profile_img)
    end

    def record_not_found
        render json: { error: "User not found" }, status: 404
    end

    def record_invalid(invalid)
        render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
