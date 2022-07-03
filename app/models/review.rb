class Review < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    def list_review
        "Movie: #{self.movie.title} Name: #{self.user.name} rating: #{self.rating} description: #{self.description}"
    end
end
