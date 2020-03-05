# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

black_diamond = Manufacturer.find_or_create_by!(name: 'Black Diamond')

c4 = seed(CamStyle, { name: 'Camalot C4' }, manufacturer_id: black_diamond.id)

c4s = {
  '.3' => {
    range_min: 13.8,
    range_max: 23.4,
    weight: 69.8,
    strength: 8,
    color: 'blue',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '.4' => {
    range_min: 15.5,
    range_max: 26.7,
    weight: 77.5,
    strength: 9,
    color: 'grey',
    buy_link: 'https://amzn.to/2TqdDdq'
  },
  '.5' => {
    range_min: 19.6,
    range_max: 33.5,
    weight: 93,
    strength: 12,
    color: 'purple',
    buy_link: 'https://amzn.to/2Ie8KPO'
  },
  '.75' => {
    range_min: 23.9,
    range_max: 41.2,
    weight: 107.5,
    strength: 12,
    color: 'green',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#1' => {
    range_min: 30.2,
    range_max: 52.1,
    weight: 123.9,
    strength: 12,
    color: 'red',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#2' => {
    range_min: 37.2,
    range_max: 64.9,
    weight: 140.3,
    strength: 12,
    color: 'yellow',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#3' => {
    range_min: 50.7,
    range_max: 87.9,
    weight: 181.1,
    strength: 12,
    color: 'blue',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#4' => {
    weight: 257.8,
    range_min: 66.0,
    range_max: 114.7,
    strength: 14,
    color: 'grey',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#5' => {
    weight: 348.1,
    range_min: 85.4,
    range_max: 148.5,
    strength: 14,
    color: 'purple',
    buy_link: 'https://amzn.to/3cmq030'
  },
  '#6' => {
    weight: 529.9,
    range_min: 114.1,
    range_max: 195.0,
    strength: 14,
    color: 'green',
    buy_link: 'https://amzn.to/3cmq030'
  }
}

c4s.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: c4.id }, attrs)
end

ultralight = seed(CamStyle, { name: 'C4 Ultralight' }, manufacturer_id: black_diamond.id)

ultralights = {
  '.4' => {
    color: 'grey',
    weight: 61,
    strength: 8,
    range_min: 15.5,
    range_max: 26.7,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '.5' => {
    color: 'purple',
    weight: 74,
    strength: 10,
    range_min: 19.6,
    range_max: 33.5,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '.75' => {
    color: 'green',
    weight: 89,
    strength: 12,
    range_min: 23.9,
    range_max: 41.2,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '#1' => {
    color: 'red',
    weight: 101,
    strength: 12,
    range_min: 30.2,
    range_max: 52.1,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '#2' => {
    color: 'yellow',
    weight: 126,
    strength: 12,
    range_min: 37.2,
    range_max: 64.9,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '#3' => {
    color: 'blue',
    weight: 167,
    strength: 12,
    range_min: 50.7,
    range_max: 87.9,
    buy_link: 'https://amzn.to/3anUTCq'
  },
  '#4' => {
    color: 'grey',
    weight: 225,
    strength: 12,
    range_min: 66,
    range_max: 114.7,
    buy_link: 'https://amzn.to/3anUTCq'
  }
}

ultralights.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: ultralight.id }, attrs)
end

z4 = seed(CamStyle, { name: 'Camalot Z4' }, manufacturer_id: black_diamond.id)

z4s = {
  '0' => {
    color: 'green',
    weight: 43,
    strength: 5,
    range_min: 7.5,
    range_max: 11.8,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.1' => {
    color: 'red',
    weight: 45,
    strength: 5,
    range_min: 8.8,
    range_max: 13.8,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.2' => {
    color: 'yellow',
    weight: 48,
    strength: 6,
    range_min: 10.4,
    range_max: 16.3,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.3' => {
    color: 'blue',
    weight: 54,
    strength: 8,
    range_min: 12.4,
    range_max: 22.6,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.4' => {
    color: 'grey',
    weight: 61,
    strength: 9,
    range_min: 15.3,
    range_max: 27.7,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.5' => {
    color: 'purple',
    weight: 77,
    strength: 10,
    range_min: 18.8,
    range_max: 33.9,
    buy_link: 'https://amzn.to/2TrFhZ5'
  },
  '.75' => {
    color: 'green',
    weight: 93,
    strength: 10,
    range_min: 23.1,
    range_max: 42.1,
    buy_link: 'https://amzn.to/2TrFhZ5'
  }
}

z4s.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: z4.id }, attrs)
end

c3 = seed(CamStyle, { name: 'Camalot C3' }, manufacturer_id: black_diamond.id)

c3s = {
  '000' => {
    weight: 55,
    strength: 4,
    range_min: 7.8,
    range_max: 12.9,
    color: 'grey'
  },
  '00' => {
    weight: 57,
    strength: 6,
    range_min: 9,
    range_max: 13.7,
    color: 'purple'
  },
  '0' => {
    range_min: 10.7,
    range_max: 15.8,
    weight: 59,
    strength: 7,
    color: 'green'
  },
  '1' => {
    range_min: 12,
    range_max: 18.8,
    weight: 62,
    strength: 10,
    color: 'red'
  },
  '2' => {
    range_min: 14.2,
    range_max: 22.6,
    weight: 66,
    strength: 10,
    color: 'yellow'
  }
}

c3s.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: c3.id }, attrs)
end

x4 = seed(CamStyle, { name: 'Camalot X4' }, manufacturer_id: black_diamond.id)

x4s = {
  '.1' => {
    weight: 51,
    strength: 5,
    range_min: 8.4,
    range_max: 13.8,
    color: 'red',
    buy_link: 'https://amzn.to/2TssyVG'
  },
  '.2' => {
    weight: 54,
    strength: 6,
    range_min: 9.9,
    range_max: 16.5,
    color: 'yellow',
    buy_link: 'https://amzn.to/2TssyVG'
  },
  '.3' => {
    range_min: 12.4,
    range_max: 21.2,
    weight: 75,
    strength: 8,
    color: 'blue',
    buy_link: 'https://amzn.to/2TssyVG'
  },
  '.4' => {
    range_min: 15.5,
    range_max: 26.6,
    weight: 82,
    strength: 9,
    color: 'grey',
    buy_link: 'https://amzn.to/2TssyVG'
  },
  '.5' => {
    range_min: 19.8,
    range_max: 33.7,
    weight: 91,
    strength: 9,
    color: 'purple',
    buy_link: 'https://amzn.to/2TssyVG'
  },
  '.75' => {
    range_min: 24,
    range_max: 41.2,
    weight: 112,
    strength: 9,
    color: 'green',
    buy_link: 'https://amzn.to/2TssyVG'
  }
}

x4s.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: x4.id }, attrs)
end

totem = Manufacturer.find_or_create_by!(name: 'Totem')

totem_cam = seed(CamStyle, { name: 'Totem Cam' }, manufacturer_id: totem.id)

totems = {
  '0.50' => {
    color: 'black',
    range_min: 11.7,
    range_max: 18.9,
    strength: 6,
    weight: 69,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '.65' => {
    color: 'blue',
    range_min: 13.8,
    range_max: 22.5,
    strength: 8,
    weight: 75,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '0.80' => {
    color: 'yellow',
    range_min: 17,
    range_max: 27.7,
    strength: 9,
    weight: 83,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '1.00' => {
    color: 'purple',
    range_min: 20.9,
    range_max: 34.2,
    strength: 10,
    weight: 95,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '1.25' => {
    color: 'green',
    range_min: 25.7,
    range_max: 42.3,
    strength: 13,
    weight: 109,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '1.50' => {
    color: 'red',
    range_min: 31.6,
    range_max: 52.2,
    strength: 13,
    weight: 132,
    buy_link: 'https://amzn.to/2PPKS9e'
  },
  '1.80' => {
    color: 'orange',
    range_min: 39.7,
    range_max: 64.2,
    strength: 13,
    weight: 144,
    buy_link: 'https://amzn.to/2PPKS9e'
  }
}

totems.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: totem_cam.id }, attrs)
end

metolius = Manufacturer.find_or_create_by!(name: 'Metolius')

mastercam = seed(CamStyle, { name: 'Master Cam' }, manufacturer_id: metolius.id)

mastercams = {
  '00' => {
    color: 'grey',
    range_min: 8.5,
    range_max: 12,
    strength: 5,
    weight: 45,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '0' => {
    color: 'purple',
    range_min: 10,
    range_max: 15,
    strength: 5,
    weight: 45,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#1' => {
    color: 'blue',
    range_min: 12.5,
    range_max: 18,
    strength: 8,
    weight: 52,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#2' => {
    color: 'yellow',
    range_min: 15.5,
    range_max: 22.5,
    strength: 10,
    weight: 55,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#3' => {
    color: 'orange',
    range_min: 18.5,
    range_max: 26.5,
    strength: 10,
    weight: 65,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#4' => {
    color: 'red',
    range_min: 23.5,
    range_max: 33.5,
    strength: 10,
    weight: 75,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#5' => {
    color: 'black',
    range_min: 28,
    range_max: 39.5,
    strength: 10,
    weight: 85,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#6' => {
    color: 'green',
    range_min: 32.5,
    range_max: 48,
    strength: 10,
    weight: 96,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#7' => {
    color: 'blue',
    range_min: 40,
    range_max: 57.5,
    strength: 10,
    weight: 112,
    buy_link: 'https://amzn.to/2PSgU4i'
  },
  '#8' => {
    color: 'purple',
    range_min: 48.5,
    range_max: 71.5,
    strength: 10,
    weight: 129,
    buy_link: 'https://amzn.to/2PSgU4i'
  }
}

mastercams.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: mastercam.id }, attrs)
end

tcu = CamStyle.find_or_create_by!(name: 'TCU') do |c|
  c.manufacturer_id = metolius.id
end

tcus = {
  '00' => {
    color: 'grey',
    range_min: 8.5,
    range_max: 12,
    strength: 5,
    weight: 41,
    buy_link: 'https://amzn.to/3azVErV'
  },
  '0' => {
    color: 'purple',
    range_min: 10,
    range_max: 15,
    strength: 5,
    weight: 43,
    buy_link: 'https://amzn.to/3azVErV'
  },
  '#1' => {
    color: 'blue',
    range_min: 12.5,
    range_max: 18,
    strength: 8,
    weight: 50,
    buy_link: 'https://amzn.to/3azVErV'
  },
  '#2' => {
    color: 'yellow',
    range_min: 15.5,
    range_max: 22.5,
    strength: 10,
    weight: 57,
    buy_link: 'https://amzn.to/3azVErV'
  },
  '#3' => {
    color: 'orange',
    range_min: 18.5,
    range_max: 26.5,
    strength: 10,
    weight: 59,
    buy_link: 'https://amzn.to/3azVErV'
  },
  '#4' => {
    color: 'red',
    range_min: 23.5,
    range_max: 33.5,
    strength: 10,
    weight: 68,
    buy_link: 'https://amzn.to/3azVErV'
  }
}

tcus.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: tcu.id }, attrs)
end

dmm = Manufacturer.find_or_create_by!(name: 'DMM')

dragonfly = seed(CamStyle, { name: 'Dragonfly' }, manufacturer_id: dmm.id)

dragonflies = {
  '#1' => {
    color: 'green',
    strength: 6,
    weight: 55,
    range_min: 7.8,
    range_max: 11,
    buy_link: 'https://amzn.to/2TqgdkX'
  },
  '#2' => {
    color: 'red',
    strength: 6,
    weight: 56,
    range_min: 8.7,
    range_max: 12.9,
    buy_link: 'https://amzn.to/2TqgdkX'
  },
  '#3' => {
    color: 'gold',
    strength: 8,
    weight: 65,
    range_min: 10.2,
    range_max: 15.2,
    buy_link: 'https://amzn.to/2TqgdkX'
  },
  '#4' => {
    color: 'blue',
    strength: 8,
    weight: 67,
    range_min: 12.1,
    range_max: 17.9,
    buy_link: 'https://amzn.to/2TqgdkX'
  },
  '#5' => {
    color: 'silver',
    strength: 9,
    weight: 70,
    range_min: 15.1,
    range_max: 22.5,
    buy_link: 'https://amzn.to/2TqgdkX'
  },
  '#6' => {
    color: 'purple',
    strength: 9,
    weight: 73,
    range_min: 19,
    range_max: 28.3,
    buy_link: 'https://amzn.to/2TqgdkX'
  }
}

dragonflies.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: dragonfly.id }, attrs)
end

fixe = Manufacturer.find_or_create_by!(name: 'Fixe')

alien_lite = seed(CamStyle, { name: 'Alien LITE' }, manufacturer_id: fixe.id)

alien_lites = {
  '1/3' => {
    color: 'black',
    strength: 5,
    weight: 46,
    range_min: 8,
    range_max: 14
  },
  '3/8' => {
    color: 'blue',
    strength: 6,
    weight: 48,
    range_min: 10,
    range_max: 17
  },
  '1/2' => {
    color: 'green',
    strength: 7,
    weight: 52,
    range_min: 13,
    range_max: 22
  },
  '3/4' => {
    color: 'yellow',
    strength: 10,
    weight: 58,
    range_min: 15,
    range_max: 25
  },
  '7/8' => {
    color: 'grey',
    strength: 10,
    weight: 59,
    range_min: 17,
    range_max: 30
  },
  '#1' => {
    color: 'red',
    strength: 10,
    weight: 61,
    range_min: 20,
    range_max: 33
  }
}

alien_lites.each do |name, attrs|
  seed(Cam, { name: name, cam_style_id: alien_lite.id }, attrs)
end
