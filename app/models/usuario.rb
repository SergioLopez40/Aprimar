class Usuario < ApplicationRecord
    attribute :tiempo, :float, default: 0
    attribute :frecuencia_cardiaca, :float, default: 0
    attribute :distancia, :integer, default: 0
    attribute :co, :integer, default: 0
    attribute :vo_max, :float, default: 0
    attribute :coeficiente_respiratorio, :float, default: 0.0
end
