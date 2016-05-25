class Api::PlaylistsController < ApplicationController

  def show
    playlist = Playlist.find(params[:id])
    render json: playlist
  end

  def create
    playlist = Playlist.new(playlist_params)

    if playlist.save
      render json: playlist
    else
      render status: :unprocessable_entity
    end
  end

  def index
    render json: Playlist.all
  end

  def update
    playlist = Playlist.find(params[:id])

    if playlist && playlist.update(playlist_params)
      render json: playlist
    else
      render status: :unprocessable_entity
    end
  end

  def destroy
    playlist = Playlist.find(params[:id])

    if playlist && playlist.destroy
      render json: {message: "Successfully deleted!"}
    else
      render status: :unprocessable_entity
    end
  end

  private
    def playlist_params
      params.require(:playlist).permit(:user_id, :music_id, :name)
    end
end
