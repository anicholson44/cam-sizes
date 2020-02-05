class CreateCamStyles < ActiveRecord::Migration[6.0]
  def change
    create_table :cam_styles do |t|
      t.string :name, null: false
      t.references :manufacturer, foreign_key: true, null: false
    end
  end
end
