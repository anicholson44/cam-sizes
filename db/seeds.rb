# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

black_diamond = Manufacturer.find_or_create_by!(name: 'Black Diamond')

c4 = CamStyle.find_or_create_by!(name: 'Camalot C4 2019') do |c|
  c.manufacturer_id = black_diamond.id
end

c4s = [
  {
    name: '.3',
    range_min: 13.8,
    range_max: 23.4,
    weight: 69.8,
    strength: 8,
    color: 'blue'
  },
  {
    name: '.4',
    range_min: 15.5,
    range_max: 26.7,
    weight: 77.5,
    strength: 9,
    color: 'grey'
  },
  {
    name: '.5',
    range_min: 19.6,
    range_max: 33.5,
    weight: 93,
    strength: 12,
    color: 'purple'
  },
  {
    name: '.75',
    range_min: 23.9,
    range_max: 41.2,
    weight: 107.5,
    strength: 12,
    color: 'green'
  },
  {
    name: '#1',
    range_min: 30.2,
    range_max: 52.1,
    weight: 123.9,
    strength: 12,
    color: 'red'
  },
  {
    name: '#2',
    range_min: 37.2,
    range_max: 64.9,
    weight: 140.3,
    strength: 12,
    color: 'yellow'
  },
  {
    name: '#3',
    range_min: 50.7,
    range_max: 87.9,
    weight: 181.1,
    strength: 12,
    color: 'blue'
  },
  {
    name: '#4',
    weight: 257.8,
    range_min: 66.0,
    range_max: 114.7,
    strength: 14,
    color: 'grey'
  },
  {
    name: '#5',
    weight: 348.1,
    range_min: 85.4,
    range_max: 148.5,
    strength: 14,
    color: 'purple'
  },
  {
    name: '#6',
    weight: 529.9,
    range_min: 114.1,
    range_max: 195.0,
    strength: 14,
    color: 'green'
  }
]

c4s.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = c4.id
  end
end

totem = Manufacturer.find_or_create_by!(name: 'Totem')

totem_cam = CamStyle.find_or_create_by!(name: 'Totem Cam') do |c|
  c.manufacturer_id = totem.id
end

totems = [
  {
    name: '0.50',
    color: 'black',
    range_min: 11.7,
    range_max: 18.9,
    strength: 6,
    weight: 69
  },
  {
    name: '.65',
    color: 'blue',
    range_min: 13.8,
    range_max: 22.5,
    strength: 8,
    weight: 75
  },
  {
    name: '0.80',
    color: 'yellow',
    range_min: 17,
    range_max: 27.7,
    strength: 9,
    weight: 83
  },
  {
    name: '1.00',
    color: 'purple',
    range_min: 20.9,
    range_max: 34.2,
    strength: 10,
    weight: 95
  },
  {
    name: '1.25',
    color: 'green',
    range_min: 25.7,
    range_max: 42.3,
    strength: 13,
    weight: 109
  },
  {
    name: '1.50',
    color: 'red',
    range_min: 31.6,
    range_max: 52.2,
    strength: 13,
    weight: 132
  },
  {
    name: '1.80',
    color: 'orange',
    range_min: 39.7,
    range_max: 64.2,
    strength: 13,
    weight: 144
  }
]

totems.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = totem_cam.id
  end
end
