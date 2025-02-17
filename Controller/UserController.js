import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }

    })

    if (findUser) {
        // return res.status(400).json({
        //     message: "User already exists"
        // })

        return res.json({ status: 400, message: "User already exists , Please select another email" });
    }
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    return res.json({ status: 200, message: "User created successfully", data: newUser });
}

// update user

export const updateUser = async (req, res) => {
    // const {id} = req.params;
    const userId = req.params.id;
    const { name, email, password } = req.body;

    const updateUser = await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    return res.json({ status: 200, message: "User updated successfully", data: updateUser });
}


// Get all user in array
export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            post: true
        }
    });
    return res.json({ status: 200, message: "User fetched successfully", data: users });
}

// get user by id
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        }
    })
    return res.json({ status: 200, message: "User fetched successfully", data: user });
}

// delete user 

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })
    return res.json({ status: 200, message: "User deleted successfully", data: user });
}