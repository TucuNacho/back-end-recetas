import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  leerReceta,
  obtenerRecetaPorId,
} from "../controllers/receta.controllers.js";
import validarRecetas from "../../middlewares/validarProducto.js";
import verificarJWT from "../../middlewares/verificarJTW.js";

const router = Router();

export default router;
router.route("/").post([verificarJWT,validarRecetas], crearReceta).get(leerReceta);
router
  .route("/:id")
  .delete(verificarJWT,borrarReceta)
  .get(obtenerRecetaPorId)
  .put([verificarJWT,validarRecetas], editarReceta);
