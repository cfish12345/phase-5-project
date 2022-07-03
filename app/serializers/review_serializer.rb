class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :movie_id, :rating, :description

    belongs_to :movie
    belongs_to :user
end