const { prisma } = require("../prisma");
const { newsValidation } = require("../validations/NewsValidation");

const createNews = async (req, res) => {
    try {
      const { title, text, user, category } = req.body;
      const data = {
        title,
        text,
        user: { connect: { id: user } },
        category: { connect: { id: category } },
        banner: req.file ? req.file.filename : "../img/banner_padrao.png",
      };

      await newsValidation.validate(data);
      const news = await prisma.news.create({
        data,
      });
      return res.send(news);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  
const getAllNews = async (req,res) =>{
    try {
        const news = await prisma.news.findMany({
          skip: 3,
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
            category: {
              select: {
                type: true,
              },
            },
          },
        });
        return res.json(news);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
}

const getNewsById = async (req,res) =>{
    try {
        const news = await prisma.news.findUnique({
            where:{
                id: Number(req.params.id)
            },
            select:{
                title: true,
                text: true,
                banner: true,
                createdAt: true,
                user:{
                    select:{
                        name: true
                    }
                },
                category: {
                    select:{
                        type: true
                    }
                }
            }
        })
        return res.send(news);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const editNews = async (req,res) => {
    try {
        const data = req.body;

        if(req.file){
            data.banner = req.file.filename;
        }

        const user = await prisma.news.update({
            where:{
                id: Number(req.params.id)
            },
            data
        })
        return res.send(user);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

const removeNews = async (req,res) => {
    try {
        await prisma.news.delete({
            where:{
                id: Number(req.params.id)
            }
        })

        return res.send("Notícia Deletado");
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const getCarouselNews = async (req, res) => {
    try {
      const news = await prisma.news.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 3,
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
          category: {
            select: {
              type: true,
            },
          },
        },
      });
  
      return res.json(news);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }
  
  const searchNewsByTitle = async (req, res) => {
    try {
      const { title } = req.query;

      if (!title) {
        return res.status(400).json("Você deve pesquisar algo!");
      }      

      const news = await prisma.news.findMany({
        where: {
          title: {
            contains: title,
          },
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
          category: {
            select: {
              type: true,
            },
          },
        },
      });

      if(news.length === 0){
        return res.status(404).json("Notícia não encontrada!");
      }

      return res.json(news);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
  

module.exports = {
    createNews,
    getAllNews,
    editNews,
    removeNews,
    getNewsById,
    getCarouselNews,
    searchNewsByTitle
}