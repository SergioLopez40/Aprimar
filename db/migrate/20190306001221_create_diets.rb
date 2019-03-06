class CreateDiets < ActiveRecord::Migration[5.2]
  def change
    create_table :diets do |t|
      t.text :descripcion
      t.text :instrucciones
      t.text :ingredientes
      t.boolean :diabetes
      t.boolean :hipertension
      t.boolean :colesterol_alto

      t.timestamps
    end
  end
end
