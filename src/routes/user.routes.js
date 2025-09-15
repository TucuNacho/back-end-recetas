import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  leerUserPorId,
  leerUsuario,
  loginUsuario
} from "../controllers/user.controllers.js";
import validacionUsuario from "../../middlewares/validarUsuario.js";
const router = Router();
router.route("/").get(leerUsuario).post(validacionUsuario, crearUsuario);
router
  .route("/:id")
  .get(leerUserPorId)
  .delete(borrarUsuario)
  .put(validacionUsuario, editarUsuario);
router.route("/login").post(loginUsuario);
export default router;
