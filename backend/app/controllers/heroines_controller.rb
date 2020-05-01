class HeroinesController < ApplicationController
    def index
        @heroines = Heroine.all
        render json: @heroines, include: [:power]
    end
    
    def show
        @heroine = Heroine.find(params[:id])
        render json: @heroine, include: [:power]
    end

    def create
        @heroine = Heroine.create({name: params[:name], super_name: params[:super_name], power_id: params[:power_id]})
        redirect_to "http://localhost:5500"
    end
end
