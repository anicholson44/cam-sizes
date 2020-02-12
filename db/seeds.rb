# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

black_diamond = Manufacturer.find_or_create_by!(name: 'Black Diamond')

c4 = CamStyle.find_or_create_by!(name: 'Camalot C4') do |c|
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

c3 = CamStyle.find_or_create_by!(name: 'Camalot C3') do |c|
  c.manufacturer_id = black_diamond.id
end

c3s = [
  {
    name: '000',
    weight: 55,
    strength: 4,
    range_min: 7.8,
    range_max: 12.9,
    color: 'grey'
  },
  {
    name: '00',
    weight: 57,
    strength: 6,
    range_min: 9,
    range_max: 13.7,
    color: 'purple'
  },
  {
    name: '0',
    range_min: 10.7,
    range_max: 15.8,
    weight: 59,
    strength: 7,
    color: 'green'
  },
  {
    name: '1',
    range_min: 12,
    range_max: 18.8,
    weight: 62,
    strength: 10,
    color: 'red'
  },
  {
    name: '2',
    range_min: 14.2,
    range_max: 22.6,
    weight: 66,
    strength: 10,
    color: 'yellow'
  }
]

c3s.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = c3.id
  end
end

x4 = CamStyle.find_or_create_by!(name: 'Camalot X4') do |c|
  c.manufacturer_id = black_diamond.id
end

x4s = [
  {
    name: '.1',
    weight: 51,
    strength: 5,
    range_min: 8.4,
    range_max: 13.8,
    color: 'red'
  },
  {
    name: '.2',
    weight: 54,
    strength: 6,
    range_min: 9.9,
    range_max: 16.5,
    color: 'yellow'
  },
  {
    name: '.3',
    range_min: 12.4,
    range_max: 21.2,
    weight: 75,
    strength: 8,
    color: 'blue'
  },
  {
    name: '.4',
    range_min: 15.5,
    range_max: 26.6,
    weight: 82,
    strength: 9,
    color: 'grey'
  },
  {
    name: '.5',
    range_min: 19.8,
    range_max: 33.7,
    weight: 91,
    strength: 9,
    color: 'purple'
  },
  {
    name: '.75',
    range_min: 24,
    range_max: 41.2,
    weight: 112,
    strength: 9,
    color: 'green'
  }
]

x4s.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = x4.id
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

metolius = Manufacturer.find_or_create_by!(name: 'Metolius')

mastercam = CamStyle.find_or_create_by!(name: 'Master Cam') do |c|
  c.manufacturer_id = metolius.id
end

mastercams = [
  {
    name: '00',
    color: 'grey',
    range_min: 8.5,
    range_max: 12,
    strength: 5,
    weight: 45
  },
  {
    name: '0',
    color: 'purple',
    range_min: 10,
    range_max: 15,
    strength: 5,
    weight: 45
  },
  {
    name: '#1',
    color: 'blue',
    range_min: 12.5,
    range_max: 18,
    strength: 8,
    weight: 52
  },
  {
    name: '#2',
    color: 'yellow',
    range_min: 15.5,
    range_max: 22.5,
    strength: 10,
    weight: 55
  },
  {
    name: '#3',
    color: 'orange',
    range_min: 18.5,
    range_max: 26.5,
    strength: 10,
    weight: 65
  },
  {
    name: '#4',
    color: 'red',
    range_min: 23.5,
    range_max: 33.5,
    strength: 10,
    weight: 75
  },
  {
    name: '#5',
    color: 'black',
    range_min: 28,
    range_max: 39.5,
    strength: 10,
    weight: 85
  },
  {
    name: '#6',
    color: 'green',
    range_min: 32.5,
    range_max: 48,
    strength: 10,
    weight: 96
  },
  {
    name: '#7',
    color: 'blue',
    range_min: 40,
    range_max: 57.5,
    strength: 10,
    weight: 112
  },
  {
    name: '#8',
    color: 'purple',
    range_min: 48.5,
    range_max: 71.5,
    strength: 10,
    weight: 129
  }
]

mastercams.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = mastercam.id
  end
end

tcu = CamStyle.find_or_create_by!(name: 'TCU') do |c|
  c.manufacturer_id = metolius.id
end

tcus = [
  {
    name: '00',
    color: 'grey',
    range_min: 8.5,
    range_max: 12,
    strength: 5,
    weight: 41
  },
  {
    name: '0',
    color: 'purple',
    range_min: 10,
    range_max: 15,
    strength: 5,
    weight: 43
  },
  {
    name: '#1',
    color: 'blue',
    range_min: 12.5,
    range_max: 18,
    strength: 8,
    weight: 50
  },
  {
    name: '#2',
    color: 'yellow',
    range_min: 15.5,
    range_max: 22.5,
    strength: 10,
    weight: 57
  },
  {
    name: '#3',
    color: 'orange',
    range_min: 18.5,
    range_max: 26.5,
    strength: 10,
    weight: 59
  },
  {
    name: '#4',
    color: 'red',
    range_min: 23.5,
    range_max: 33.5,
    strength: 10,
    weight: 68
  },
]

tcus.each do |attrs|
  Cam.find_or_create_by!(attrs) do |c|
    c.cam_style_id = tcu.id
  end
end
