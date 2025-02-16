import { Router } from "express";
import { createUser,updateUser ,getUsers, getUserById, deleteUser } from "../Controller/UserController.js";

const router  = Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);


export default router;