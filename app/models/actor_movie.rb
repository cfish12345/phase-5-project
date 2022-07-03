class ActorMovie < ApplicationRecord
    belongs_to :actor
    belongs_to :movie

    def name_movie
        "#{self.movie.title}: #{self.actor.name}"
    end

    def self.display_movies(value)
        self.all.where(actor_id: value)  
    end
end
