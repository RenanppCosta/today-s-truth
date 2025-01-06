const { prisma } = require("../prisma");
const { userValidation } = require("../validations/UserValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) =>{
    const data = req.body;
    try {
        await userValidation.validate(data);
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await prisma.user.create({
            data
        });

         const token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET,{expiresIn: "24h"});

        return res.send({user, token});
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

        if(req.file){
            data.photo_perfil = req.file.filename;
        }

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

const getNewsByUser = async (req,res) =>{
    try {
        const { userId } = req.params;
    
        const news = await prisma.news.findMany({
          where: {
            user_id: Number(userId),
          },
          select: {
            id: true,
            title: true,
            banner: true,
            text: true,
            createdAt: true,
            user: {
              select: {
                name: true,
              },
            },
            category:{
                select:{
                    type: true
                }
            },
          },
        });
        return res.json(news);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    editUser,
    removeUser,
    getNewsByUser
}