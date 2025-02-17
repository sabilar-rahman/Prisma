import { Router } from "express";
import { createComment,updateComment ,getComments, getCommentById, deleteComment } from "../Controller/CommentController.js";

const router  = Router();

router.post("/", createComment);
router.put("/:id", updateComment);
router.get("/", getComments);
router.get("/:id", getCommentById);
router.delete("/:id", deleteComment);


export default router;