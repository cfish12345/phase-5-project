class Review < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    validates :rating, numericality: { greater_than: 0, less_than: 11 }

    def list_review
        "Movie: #{self.movie.title} Name: #{self.user.name} rating: #{self.rating} description: #{self.description}"
    end
end
