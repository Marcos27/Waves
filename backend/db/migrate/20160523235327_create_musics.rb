class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :genre
      t.string :song
      t.text :bio
      t.string :artist
      t.text :song_url

      t.timestamps null: false
    end
  end
end
