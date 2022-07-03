class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def list_movie
        "Title: #{self.title} Actors: #{self.actors} Genre: #{self.genre}"
    end
end
