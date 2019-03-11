class UsuariosController < ApplicationController
  before_action :set_usuario, only: [:show, :update, :updateDistance, :destroy]

  # GET /usuarios
  def index
    @usuarios = Usuario.all
    render json: @usuarios
    #render json: {status: 200, msg: 'Logged-in'}
  end

  # GET /usuarios/1
  def show
    render json: @usuario
  end

  # POST /usuarios
  def create
    @usuario = Usuario.new(usuario_params)

    if @usuario.save
      render json: @usuario, status: :created, location: @usuario
    else
      render json: @usuario.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /usuarios/1
  def update
    if @usuario.update(usuario_params)
      render json: @usuario
    else
      render json: @usuario.errors, status: :unprocessable_entity
    end
    #user = User.find(params[:id])
    #if user.update(user_params)
    #  render json: { status: 200, msg: 'User details have been updated.' }
    #end
  end

  # PATCH/PUT /usuarios/update/1
  def updateDistance
    #if @usuario.update(usuario_dist)
    #  render json: @usuario
    #else
    #  render json: @usuario.errors, status: :unprocessable_entity
    #end
    usuario = Usuario.find(params[:id])
    if user.update(usuario_dist)
      render json: { status: 200, msg: 'User details have been updated.' }
    end
  end

  # DELETE /usuarios/1
  def destroy
    @usuario.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_usuario
      @usuario = Usuario.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def usuario_params
      params.require(:usuario).permit(:nombre, :contrasena, :sexo, :peso, :diabetes, :hipertension, :colesterol_alto)
    end

    def usuario_dist
      params.require(:usuario).permit(:distancia)
    end
end
