import { Router } from "express";
import { createPost,updatePost ,getPosts, getPostById, deletePost,SearchPost } from "../Controller/PostController.js";

const router  = Router();

router.post("/", createPost);
router.put("/:id", updatePost);
router.get("/search", SearchPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);


export default router;