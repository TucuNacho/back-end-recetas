import Recetas from "./recetas.routes.js"
import UsuarioRoutes from "./user.routes.js";
import { Router } from "express"

const router= Router()

router.use("/recetas", Recetas)
router.use('/usuario', UsuarioRoutes)

export default router
