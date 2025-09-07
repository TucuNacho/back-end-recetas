import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  leerReceta,
  obtenerRecetaPorId,
} from "../controllers/receta.controllers.js";
import validarRecetas from "../../middlewares/validarProducto.js";

const router = Router();

export default router;
router.route("/").post(validarRecetas, crearReceta).get(leerReceta);
router
  .route("/:id")
  .delete(borrarReceta)
  .get(obtenerRecetaPorId)
  .put(validarRecetas, editarReceta);
