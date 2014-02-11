# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140211185143) do

  create_table "pickups", force: true do |t|
    t.integer  "restaurant_id"
    t.integer  "shelter_id"
    t.string   "confirmation_code"
    t.string   "status"
    t.datetime "closing_time"
    t.text     "food_description"
    t.integer  "meals"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "restaurants", force: true do |t|
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  create_table "shelters", force: true do |t|
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

end
