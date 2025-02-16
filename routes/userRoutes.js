import { Router } from "express";
import { createUser,updateUser ,getUsers, getUserById } from "../Controller/UserController.js";

const router  = Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", getUsers);
router.get("/:id", getUserById);


export default router;