# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

Sergio = Usuario.create(
    nombre: "Sergio",
    contrasena: "aprimar",
    sexo: "masculino",
    peso: 65.8, 
    tiempo: 0.0,
    frecuencia_cardiaca: 0.0,
    distancia: 0,
    vo_max: 0.0,
    diabetes: false,
    hipertension: false,
    colesterol_alto: false,)