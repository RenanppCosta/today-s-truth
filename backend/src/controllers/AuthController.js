const { prisma } = require("../prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req,res) => {
    const {email, password} = req.body;
    try {
        if(!(email && password)){
            return res.status(400).json("Usuário ou senha obrigatórios");
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        const passwordValid = bcrypt.compareSync(password, user.password);

        if(user && passwordValid){
            const token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET,{expiresIn: "24h"});

            return res.send(token);
        }else{
            return res.status(400).json("Usuário ou Senha estão errados!");
        }

        
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

module.exports = {
    Login
}