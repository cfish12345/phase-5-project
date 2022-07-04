class User < ApplicationRecord
    has_many :reviews
    has_many :movies, through: :reviews
    has_secure_password

    validates :password, length: { in: 6..20}

    def login_info
        "Welcome #{self.name}! #{self.profile_img}"
    end
end
