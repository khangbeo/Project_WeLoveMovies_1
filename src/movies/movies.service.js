const knex = require('../db/connection')

// /movies
function list() {
    return knex('movies').select('*')
}
// /movies?is_showing=true
function listMoviesShowing() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .distinct("m.*")
    .where({ "mt.is_showing": true })
    .orderBy("m.movie_id")
}
// /movies/:movieId
function read(movie_id) {
    return knex('movies')
        .where({ movie_id })
        .first()
}
module.exports = { 
    list,
    listMoviesShowing,
    read,
}