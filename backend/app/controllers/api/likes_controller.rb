class Api::LikesController < ApplicationController

  def show
    like = Like.find(params[:id])
    render json: like
  end

  def create
    like = Like.new(like_params)

    if like.save
      render json: like
    else
      render status: :unprocessable_entity
    end
  end

  def index
    render json: Like.all
  end

  def update
    like = Like.find(params[:id])

    if like && like.update(like_params)
      render json: like
    else
      render status: :unprocessable_entity
    end
  end

  def destroy
    like = Like.find(params[:id])

    if like && like.destroy
      render json: {message: "Successfully deleted!"}
    else
      render status: :unprocessable_entity
    end
  end

  private
    def like_params
      params.require(:like).permit(:user_id, :music_id)
    end
end
