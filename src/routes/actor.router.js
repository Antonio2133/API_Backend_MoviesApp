const { getAll, update, create, getOne, remove, setActorsGenres } = require('../controllers/actor.controllers');
const express = require('express');

const actorRouter = express.Router();

actorRouter.route("/actors")
		.get(getAll)
    .post(create);

actorRouter.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

actorRouter.route('/actors/:id/genres')
    .post(setActorsGenres);

module.exports = actorRouter;