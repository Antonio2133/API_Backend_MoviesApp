const { getAll, update, create, getOne, remove } = require('../controllers/genre.controllers');
const express = require('express');

const genreRouter = express.Router();

genreRouter.route("/genres")
		.get(getAll)
    .post(create);

genreRouter.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genreRouter;