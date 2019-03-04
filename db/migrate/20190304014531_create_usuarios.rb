class CreateUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :contrasena
      t.string :sexo
      t.float :peso
      t.float :tiempo
      t.float :frecuencia_cardiaca
      t.integer :distancia
      t.float :vo_max
      t.boolean :diabetes
      t.boolean :hipertension
      t.boolean :colesterol_alto

      t.timestamps
    end
  end
end
