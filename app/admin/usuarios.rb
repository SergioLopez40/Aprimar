ActiveAdmin.register Usuario do
    permit_params :nombre, :contrasena, :sexo, :peso, :tiempo, :frecuencia_cardiaca, :distancia, :vo_max, :diabetes, :hipertension, :colesterol_alto
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
