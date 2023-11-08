const knex = require("../connection");
const errorMessages = require("../helpers/errorMessages");

const listCategories = async (req, res) => {
    try {
        const categories = await knex("categorias");
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ mensagem: errorMessages.server, error: error.message });
    }
};

module.exports = { listCategories };