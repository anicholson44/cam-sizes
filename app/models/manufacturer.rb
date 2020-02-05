# frozen_string_literal: true

class Manufacturer < ApplicationRecord
  validates :name, uniqueness: true

  has_many :cam_styles
  has_many :cams, through: :cam_styles
end
