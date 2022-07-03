class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :profile_img
  
    has_many :reviews
  end