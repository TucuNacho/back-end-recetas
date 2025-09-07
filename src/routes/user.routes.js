import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  leerUserPorId,
  leerUsuario,
} from "../controllers/user.controllers.js";
import validacionUsuario from "../../middlewares/validarUsuario.js";
const router = Router();
router.route("/").get(leerUsuario).post(validacionUsuario, crearUsuario);
router
  .route("/:id")
  .get(leerUserPorId)
  .delete(borrarUsuario)
  .put(validacionUsuario, editarUsuario);

export default router;
