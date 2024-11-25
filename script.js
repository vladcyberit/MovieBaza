'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const latestWatched1 = prompt("Який фільм ви дивились нещодавно?", ""),
        points1 = +prompt("Яка ваша оцінка?", ""),
        latestWatched2 = prompt("Який фільм ви дивились нещодавно?", ""),
        points2 = +prompt("Яка ваша оцінка?", "");

personalMovieDB.movies[latestWatched1] = points1;
personalMovieDB.movies[latestWatched2] = points2;

console.log(personalMovieDB);