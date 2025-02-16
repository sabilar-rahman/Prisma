import { Router } from "express";
import UserRouters from "./userRoutes.js";

const router = Router();

router.use("/api/user", UserRouters);

export default router;