const { prisma } = require("../prisma");

const getAllCategories = async (req, res) =>{
    try {
        const category = await prisma.category.findMany({
            select:{
                id: true,
                type: true
            }
        });

        return res.send(category);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const createCategory = async (req, res) =>{
    try {
        const data = req.body;
        const category = await prisma.category.create({
            data
        });

        return res.send(category);
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

const getAllNewsByCategory = async (req, res) => {
    try {
      const { categoryId } = req.params;
  
      const news = await prisma.news.findMany({
        where: {
          category_id: Number(categoryId),
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
        },
      });
      return res.json(news);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };

module.exports = {
    getAllCategories,
    createCategory,
    getAllNewsByCategory
}