require 'test_helper'

class UsuariosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @usuario = usuarios(:one)
  end

  test "should get index" do
    get usuarios_url, as: :json
    assert_response :success
  end

  test "should create usuario" do
    assert_difference('Usuario.count') do
      post usuarios_url, params: { usuario: { colesterol_alto: @usuario.colesterol_alto, contrase¤a: @usuario.contrase¤a, diabetes: @usuario.diabetes, distancia: @usuario.distancia, frecuencia_cardiaca: @usuario.frecuencia_cardiaca, hipertension: @usuario.hipertension, nombre: @usuario.nombre, peso: @usuario.peso, sexo: @usuario.sexo, tiempo: @usuario.tiempo, vo_max: @usuario.vo_max } }, as: :json
    end

    assert_response 201
  end

  test "should show usuario" do
    get usuario_url(@usuario), as: :json
    assert_response :success
  end

  test "should update usuario" do
    patch usuario_url(@usuario), params: { usuario: { colesterol_alto: @usuario.colesterol_alto, contrase¤a: @usuario.contrase¤a, diabetes: @usuario.diabetes, distancia: @usuario.distancia, frecuencia_cardiaca: @usuario.frecuencia_cardiaca, hipertension: @usuario.hipertension, nombre: @usuario.nombre, peso: @usuario.peso, sexo: @usuario.sexo, tiempo: @usuario.tiempo, vo_max: @usuario.vo_max } }, as: :json
    assert_response 200
  end

  test "should destroy usuario" do
    assert_difference('Usuario.count', -1) do
      delete usuario_url(@usuario), as: :json
    end

    assert_response 204
  end
end
