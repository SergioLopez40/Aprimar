class CreateDiets < ActiveRecord::Migration[5.2]
  def change
    create_table :diets do |t|
      t.text :descripcion, null: false
      t.text :instrucciones, null: false
      t.text :ingredientes, null: false
      t.boolean :diabetes
      t.boolean :hipertension
      t.boolean :colesterol_alto

      t.timestamps
    end
  end
end
