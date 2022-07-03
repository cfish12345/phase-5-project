class Actor < ApplicationRecord
    has_many :movies
    has_many :actor_movies

    def movie_list
        self.actor_movies
    end
end
