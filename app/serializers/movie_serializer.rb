class MovieSerializer < ActiveModel::Serializer
    attributes :id, :title, :actors, :genre, :image_url, :director

    has_many :reviews
end