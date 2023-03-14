const { prisma } = require("../prisma");
const { userValidation } = require("../validations/UserValidation");
const bcrypt = require("bcrypt");

const createUser = async (req, res) =>{
    const data = req.body;
    try {
        await userValidation.validate(data);
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await prisma.user.create({
            data
        });

        return res.send(user);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const getAllUsers = async (req,res) =>{
    try {
        const users = await prisma.user.findMany({
            select:{
                name: true,
                email: true,
                password: false,
                photo_perfil: false,
                createdAt: true

            }
        });
        return res.json(users);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const getUserById = async (req,res) =>{
    try {
        const user = await prisma.user.findUnique({
            where:{
                id: Number(req.params.id)
            },
            select:{
                name: true,
                email: true,
                password: true,
                photo_perfil: true,
            }
        })
        return res.send(user);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const editUser = async (req,res) =>{
    try {
        const data = req.body;
        const user = await prisma.user.update({
            where:{
                id: Number(req.params.id)
            },
            data
        })
        return res.send(user);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const removeUser = async (req,res) => {
    try {
        await prisma.user.delete({
            where:{
                id: Number(req.params.id)
            }
        })

        return res.send("Usuário Deletado");
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    editUser,
    removeUser
}