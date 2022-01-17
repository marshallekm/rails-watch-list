class ListsController < ApplicationController

  def index
    @lists = List.all
  end

  def new
    @list = List.new
  end

  def show
    @bookmark = Bookmark.new
    @list = List.find(params[:id])
  end

  def create
    @list = List.new(list_params)
    if @list.save
    redirect_to list_path(@list)
    else
      render :show
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end
