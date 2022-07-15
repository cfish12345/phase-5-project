class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true
    validates :actors, presence: true
    validates :genre, presence: true
    validates :director, presence: true
    validates :image_url, presence: true


    def list_movie
        "Title: #{self.title} Actors: #{self.actors} Genre: #{self.genre}"
    end
end
