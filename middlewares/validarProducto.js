import { body } from "express-validator";
import Receta from "../src/models/receta.js";
import resultadoValidacion from "./resultadoValidacion.js";

const validarRecetas = [
  body("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe tener entre 3 y 50 caracteres")
    .custom(async (valor, { req }) => {
      const recetaExistente = await Receta.findOne({
        nombreReceta: valor,
      });
      if (!recetaExistente) return true;
      if (req.params?.id && recetaExistente._id.toString() === req.params.id)
        return true;
      throw new Error("Ya existe una receta con este nombre");
    }),

  body("imagen")
    .notEmpty()
    .withMessage("El campo de imagen es obligatorio")
    .matches(
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/
    )
    .withMessage("La url debe ser de formato jpg, jpeg, png o webp"),

  body("categoria")
    .notEmpty()
    .withMessage("La categoria es obligatoria")
    .isIn(["Carne y pollo", "Bebidas", "Postres", "Ensaladas", "Otros..."])
    .withMessage(
      "La categoria deben ser las siguientes: Carne y pollo, Bebidas, Postres, Ensaladas, Otros..."
    ),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es obligatoria")
    .isLength({ min: 5, max: 100 })
    .withMessage("La descripcion breve debe tener entre 5 y 100 caracteres"),

  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es obligatoria")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion amplia debe tener entre 10 y 500 caracteres"),

  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes son obligatorios"),

  body("metodoPreparacion")
    .notEmpty()
    .withMessage("El metodo de preparacion es obligatorio")
    .isLength({ min: 10, max: 1000 })
    .withMessage(
      "El metodo de preparacion debe tener entre 1o y 1000 caracteres"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validarRecetas;
