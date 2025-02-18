import { Router } from "express";
import UserRouters from "./userRoutes.js";
import PostRoutes from "./postRoute.js";
import CommentRoutes from "./CommentRoute.js";

/* কানেকশন to all routes */

const router = Router();

router.use("/api/user", UserRouters);
router.use("/api/post", PostRoutes);
router.use("/api/comment", CommentRoutes);

export default router;
