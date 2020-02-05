# frozen_string_literal: true

class Cam < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :cam_style_id }
  validates :cam_style_id, presence: true
  validates :range_min, presence: true, numericality: { greater_than: 0 }
  validates :range_max, presence: true, numericality: { greater_than: 0 }
  validates :weight, presence: true, numericality: { greater_than: 0 }
  validates :color, inclusion: { in: %w[black red yellow blue grey purple green orange] }

  belongs_to :cam_style
end
