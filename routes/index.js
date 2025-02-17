import { Router } from "express";
import UserRouters from "./userRoutes.js";
import PostRoutes from "./postRoute.js";

const router = Router();

router.use("/api/user", UserRouters);
router.use("/api/post", PostRoutes);

export default router;
