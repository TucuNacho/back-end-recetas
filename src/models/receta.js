import mongoose, { Schema } from "mongoose";

const recetas = new Schema({
  nombreReceta: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique:true
  },
  imagen: {
    type: String,
    require: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
          valor
        );
      },
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Carne y pollo", "Bebidas", "Postres", "Ensaladas", "Otros..."],
  },
  descripcion_breve:{
    type: String,
    required:true,
    minLength:5,
    maxLength:100
  },
    descripcion_amplia:{
    type: String,
    required:true,
    minLength:10,
    maxLength:500
  }
});

const Receta = mongoose.model("receta", recetas)

export default Receta
