class Api::MusicsController < ApplicationController

  def show
    music = Music.find(params[:id])
    render json: music
  end

  def create
    music = Music.new(music_params)

    if music.save
      render json: music
    else
      render status: :unprocessable_entity
    end
  end

  def index
    render json: Music.all
  end

  def update
    music = Music.find(params[:id])

    if music && music.update(music_params)
      render json: music
    else
      render status: :unprocessable_entity
    end
  end

  def destroy
    music = Music.find(params[:id])

    if music && music.destroy
      render json: {message: "Successfully deleted!"}
    else
      render status: :unprocessable_entity
    end
  end

  private
    def music_params
      params.require(:music).permit(:genre, :song, :artist, :bio, :song_url)
    end

end
