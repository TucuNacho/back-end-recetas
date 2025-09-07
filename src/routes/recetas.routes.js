import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, leerReceta, obtenerRecetaPorId } from "../controllers/receta.controllers.js";

const router = Router()


export default router
router.route("/").post(crearReceta).get(leerReceta)
router.route("/:id").delete(borrarReceta).get(obtenerRecetaPorId).put(editarReceta)
