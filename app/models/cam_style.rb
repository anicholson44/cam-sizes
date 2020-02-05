class CamStyle < ApplicationRecord
    validates :name, presence: true, uniqueness: { scope: :manufacturer_id }
    validates :manufacturer_id, presence: true

    belongs_to :manufacturer
    has_many :cams
end
