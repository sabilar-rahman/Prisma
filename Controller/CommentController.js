import prisma from "../DB/db.config.js";

export const createComment = async (req, res) => {
    const { user_id, post_id, comment } = req.body;

    // Increment comment count
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                increment: 1
            }
        }
    })

    const newComment = await prisma.comment.create({
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment
        }
    })
    return res.json({ status: 200, message: "comment created successfully", data: newComment });
}

// update comment

export const updateComment = async (req, res) => {
    // const {id} = req.params;
    const commentId = req.params.id;
    const { title, description } = req.body;

    const updateComment = await prisma.comment.update({
        where: {
            id: Number(commentId)
        },
        data: {
            title: title,
            description: description
        }
    })
    return res.json({ status: 200, message: "comment updated successfully", data: updateComment });
}


// Get all comment in array
export const getComments = async (req, res) => {
    const comment = await prisma.comment.findMany({
        include: {
            //nested
            post:{
                include: {
                    user: true
                }
            }
        }
    });
    return res.json({ status: 200, message: "comment fetched successfully", data: comment });
}

// get comment by id
export const getCommentById = async (req, res) => {
    const commentId = req.params.id;
    const comment = await prisma.comment.findFirst({
        where: {
            id: Number(commentId)
        }
    })
    return res.json({ status: 200, message: "comment fetched successfully", data: comment });
}

// delete comment 
export const deleteComment = async (req, res) => {
    const commentId = req.params.id;

        // Decrement comment count
        await prisma.post.update({
            where: {
                id: Number(post_id)
            },
            data: {
                comment_count: {
                    decrement: 1
                }
            }
        })
    const comment = await prisma.comment.delete({
        where: {
            id: Number(commentId)
        }
    })
    return res.json({ status: 200, message: "Comment deleted successfully", data: comment });
}