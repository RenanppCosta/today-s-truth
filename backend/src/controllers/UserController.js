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

module.exports = {
    createUser
}