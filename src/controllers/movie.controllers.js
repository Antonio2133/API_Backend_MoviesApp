const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const Actor = require('../models/Actor');

const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({ include: [Actor]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
  const { id } = req.params;
  const result = await Movie.findByPk(id, { include: [ Actor ] });
  if(!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  await Movie.destroy({ where: {id} });
  return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const result = await Movie.update(
    req.body,
    { where: {id}, returning: true}
  );
  if(result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setMoviesGenres = catchError(async(req, res) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  if(!movie) return res.status(404).json({message: "Movie not found"});

  await movie.setGenres(req.body);
  const results = await movie.getGenres();
  return res.json(results);
});

const setMoviesActors = catchError(async(req, res) => {
  const { id } = req.params;
  const actor = await Movie.findByPk(id);
  if(!actor) return res.status(404).json({message: "Actor not found"});

  await actor.setActor(req.body);
  const results = await actor.getActors();
  return res.json(results);
});

const setMoviesDirectors = catchError(async(req, res) => {
  const { id } = req.params;
  const director = await Movie.findByPk(id);
  if(!director) return res.status(404).json({message: "Director not found"});

  await director.setDirector(req.body);
  const results = await director.getDirectors();
  return res.json(results);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMoviesGenres,
    setMoviesActors,
    setMoviesDirectors
}