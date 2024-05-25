const express = require('express');
const genreRouter = require('./genre.router');
const actorRouter = require('./actor.router');
const movieRouter = require('./movie.router');
const directorRouter = require('./director.router');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter);
router.use(actorRouter);
router.use(movieRouter);
router.use(directorRouter);


module.exports = router;