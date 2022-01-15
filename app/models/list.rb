class List < ApplicationRecord
  has_many :bookmarks
  #bookmarks come first because it is connected to the movies joint table
  has_many :movies, through: :bookmarks, dependent: :destroy
  validates :name, presence: true, uniqueness: true
end
