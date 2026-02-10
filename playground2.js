const axios = require("axios");

async function getMoviePoster(url) {
const { data } = await axios.get(url);
return data.Poster;

}

use("sample_mflix");

const movies = db.movies
. aggregate([
{
$limit: 10,
},

])
.toArray();

(async () => {
for (const movie of movies) {
const title = movie.title;
const url = `https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}` ;
const moviePoster = await getMoviePoster(url);
db.movies. updateOne({ _id: movie._id }, { $set: { poster: moviePoster } });
}
})();

db.movies
.aggregate([
{
$limit: 10,
},
{

$project : {
_id: 0,
title: 1,
poster: 1
}, 
}, 
])
.toArray();