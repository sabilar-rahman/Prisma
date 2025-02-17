import prisma from "../DB/db.config.js";

export const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;

    const newPost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title,
            description,
        },
    });
    return res.json({
        status: 200,
        message: "Post created successfully",
        data: newPost,
    });
};

// update post

export const updatePost = async (req, res) => {
    // const {id} = req.params;
    const postId = req.params.id;
    const { title, description } = req.body;

    const updatePost = await prisma.post.update({
        where: {
            id: Number(postId),
        },
        data: {
            title: title,
            description: description,
        },
    });
    return res.json({
        status: 200,
        message: "post updated successfully",
        data: updatePost,
    });
};

// Get all post in array
export const getPosts = async (req, res) => {
    const post = await prisma.post.findMany({
        /* include: {
           //nested
           comment: {
             include: {
               // user: true
               user: {
                 select: {
                   name: true,
                   email: true,
                 },
               },
             },
           },
     
         },
         */
        orderBy: {
            created_at: "desc",
        },
        // where: {
        //     comment_count: {
        //         gt: 0
        //     }
        // }

        // where: {
        //     title: {
        //         startsWith: "a"
        //     }
        // }


/*         where: {
            OR: [
                {
                    title: {
                        startsWith: "a"
                    }
                },
                {
                    description: {
                        endsWith: "khulna"
                    }
                }
            ]
        } */
       
    });
    return res.json({
        status: 200,
        message: "post fetched successfully",
        data: post,
    });
};

// get post by id
export const getPostById = async (req, res) => {
    const postId = req.params.id;
    const post = await prisma.post.findFirst({
        where: {
            id: Number(postId),
        },
    });
    return res.json({
        status: 200,
        message: "post fetched successfully",
        data: post,
    });
};

// delete post

export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const post = await prisma.post.delete({
        where: {
            id: Number(postId),
        },
    });
    return res.json({
        status: 200,
        message: "post deleted successfully",
        data: post,
    });
};

/* shift+alt+a = multiline comment*/

/* Text search */
export const SearchPost = async (req, res) => {
    const query = req.query.q;
    const post = await prisma.post.findMany({
        where: {
            description: {
                search: query
            }
        }
    })

    return res.json({
        status: 200,
        message: "post fetched successfully",
        data: post,
    });
}