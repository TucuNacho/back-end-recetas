import resultadoValidacion from "./resultadoValidacion.js";
import Usuario from "../src/models/userName.js";
import { body } from "express-validator";

const validacionUsuario = [
  body("Username")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre del usuario debe tener entre 3 y 50 caracteres")
    .custom(async (valor, { req }) => {
      const usuarioExistente = await Usuario.findOne({
        Username: valor,
      });
      if (!usuarioExistente) return true;
      if (req.params?.id && usuarioExistente._id.toString() === req.params.id)
        return true;
      throw new Error("Ya existe us usuario con este nombre");
    }),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    )
    .withMessage(
      "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial"
    ),

  body("mail")
    .notEmpty()
    .withMessage("El mail es obligatorio")
    .isEmail()
    .withMessage(
      "El email debe tener un formato valido, por ej: juanperez@mail.com"
    )
    .custom(async (valor, { req }) => {
      const mailExistente = await Usuario.findOne({
        mail: valor,
      });
      if (!mailExistente) return true;
      if (req.params?.id && mailExistente._id.toString() === req.params.id)
        return true;
      throw new Error("Este correo electrónico ya está registrado");
    }),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
