const { getAll, update, create, getOne, remove, setDirectorsGenres } = require('../controllers/director.controllers');
const express = require('express');

const directorRouter = express.Router();

directorRouter.route("/directors")
		.get(getAll)
    .post(create);

directorRouter.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

directorRouter.route('/directors/:id/genres')
    .post(setDirectorsGenres);

module.exports = directorRouter;