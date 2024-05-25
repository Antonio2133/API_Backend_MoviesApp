const Actor = require('./Actor');
const Director = require('./Director');
const Genre = require('./Genre');
const Movie = require('./Movie');

Actor.belongsToMany(Genre, { through: 'actors_genres'});
Genre.belongsToMany(Actor, { through: 'actors_genres'});

Actor.belongsToMany(Movie, { through: 'actors_movies'});
Movie.belongsToMany(Actor, { through: 'actors_movies'});

Director.hasMany(Actor);
Actor.belongsTo(Director);

Director.hasMany(Genre);
Genre.belongsTo(Director);

Director.belongsToMany(Movie, { through: 'directors_movies'});
Movie.belongsToMany(Director, { through: 'directors_movies'});

Movie.belongsToMany(Genre, { through: 'movies_genres'});
Genre.belongsToMany(Movie, { through: 'movies_genres'});


