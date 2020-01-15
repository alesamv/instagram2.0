import { Router } from "express";
import { getHome } from "../controllers/app";
import { createUser } from "../controllers/users";

const router = Router();

//Ruta Default
router.get('/',getHome);

//Rutas de Usuario
router.post("/createUser", createUser)

export default router; 