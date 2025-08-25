import Recetas from "./recetas.routes.js"
import { Router } from "express"

const router= Router()

router.use("/recetas", Recetas)

export default router
