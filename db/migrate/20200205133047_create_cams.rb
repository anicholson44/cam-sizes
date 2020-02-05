# frozen_string_literal: true

class CreateCams < ActiveRecord::Migration[6.0]
  def change
    create_table :cams do |t|
      t.string :name, null: false
      t.references :cam_style, foreign_key: true, null: false
      t.decimal :range_min, null: false
      t.decimal :range_max, null: false
      t.decimal :weight, null: false
      t.decimal :strength, null: false
      t.string :color, null: false
    end
  end
end
