import { Router } from "express";
import { getHome } from "../controllers/app";
import { createUser, getUsers, updateUser } from "../controllers/users";
import { createPublishment, getPublishments, getAllPublishmentsByUser } from "../controllers/publishment";
import { createComment } from "../controllers/comments"

const router = Router();

//Ruta Default
router.get('/',getHome);

//Rutas de Usuario
router.post("/createUser", createUser)
router.get('/getUsers',getUsers)
router.put('/updateUser/:userId', updateUser)

//Rutas de Publicacion
router.post('/createPublishment', createPublishment)
router.get('/getPublishments', getPublishments)
router.get('/getAllPublishmentsByUser/:userId', getAllPublishmentsByUser)

//Rutas de Comentarios
router.post('/createComment',createComment)

export default router; 