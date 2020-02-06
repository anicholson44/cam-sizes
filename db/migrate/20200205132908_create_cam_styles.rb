# frozen_string_literal: true

class CreateCamStyles < ActiveRecord::Migration[6.0]
  def change
    create_table :cam_styles do |t|
      t.string :name, null: false
      t.string :color_label, null: false
      t.references :manufacturer, foreign_key: true, null: false

      t.index :color_label, unique: true
    end
  end
end
