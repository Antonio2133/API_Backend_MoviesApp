const catchError = require('../utils/catchError');
const Director = require('../models/Director');
const Genre = require('../models/Genre')

const getAll = catchError(async(req, res) => {
    const results = await Director.findAll({ include: [Genre]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Director.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
  const { id } = req.params;
  const result = await Director.findByPk(id, { include: [ Genre ]});
  if(!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async(req, res) => {
  const { id } = req.params;
  await Director.destroy({ where: {id} });
  return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
  const { id } = req.params;
  const result = await Director.update(
    req.body,
    { where: {id}, returning: true}
  );
  if(result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setDirectorsGenres = catchError(async(req, res) => {
  const { id } = req.params;
  const director = await Director.findByPk(id);
  if(!director) return res.status(404).json({message: "Director not found"});

  await director.setGenres(req.body);
  const genres = await director.getGenres();
  return res.json(genres);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setDirectorsGenres
}