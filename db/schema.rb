# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_05_133047) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cam_styles", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "manufacturer_id", null: false
    t.index ["manufacturer_id"], name: "index_cam_styles_on_manufacturer_id"
  end

  create_table "cams", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "cam_style_id", null: false
    t.float "range_min", null: false
    t.float "range_max", null: false
    t.float "weight", null: false
    t.float "strength", null: false
    t.string "color", null: false
    t.index ["cam_style_id"], name: "index_cams_on_cam_style_id"
  end

  create_table "manufacturers", force: :cascade do |t|
    t.string "name", null: false
  end

  add_foreign_key "cam_styles", "manufacturers"
  add_foreign_key "cams", "cam_styles"
end
