const jwt  = require("jsonwebtoken");

const verifyToken = async (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send("Não autorizado.")
    }

    try {
        const replace = token.replace("Bearer ", "")
        const decode = jwt.verify(replace, process.env.JWT_SECRET);
        next()
    } catch (err) {
        return res.status(401).send({message:"credenciais inválidas"});
    }

}

module.exports = { verifyToken };