# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
music = Music.create([
  {artist: "The Weeknd", song: "King of the fall", genre: "Hip Hop", bio:'Abęl Makkonen Tesfaye (born 16 February 1990), known professionally by his stage name The Weeknd (pronounced "the weekend"), is a Canadian singer, songwriter, and record producer.[1] In late 2010, Tesfaye anonymously uploaded several songs to YouTube under the name "The Weeknd". He released three nine-track mixtapes throughout 2011: House of Balloons, Thursday and Echoes of Silence, which were critically acclaimed.[2] The following year, he released a compilation album Trilogy, thirty tracks consisting of remastered versions of the mixtape material and three additional songs. It was released under Republic Records and his own label XO.', song_url: "https://www.youtube.com/watch?v=ZXBcwyMUrcU"},
  {artist: "Lana Del Ray", song: "Video Games", genre: "Slow Rock", bio:'Elizabeth Woolridge Grant (born June 21, 1985),[1] better known by her stage name Lana Del Rey, is an American singer, songwriter, and model. Born and raised in New York, Del Rey embarked on a music career in 2005 and first received widespread attention in 2011, when the music video for her single "Video Games" became a viral internet sensation.[2] Del Rey received further recognition after her major-label debut Born to Die peaked at number two on the U.S. charts and was the fifth best-selling album of 2012. A remix of its single "Summertime Sadness", produced by Cedric Gervais, peaked at number six on the U.S., and the Paradise EP followed that November, garnering Del Rey her first Grammy nomination for Best Pop Vocal Album. Three of the EPs tracks were featured in her short film Tropico, which premiered in December 2013.', song_url: "https://www.youtube.com/watch?v=cE6wxDqdOV0"}
  ])
