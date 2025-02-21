'use strict';

let numberOfFilms;

for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    if (numberOfFilms && !isNaN(numberOfFilms) && numberOfFilms > 0) {
        break;
    } else {
        alert("Невірні дані! Будь ласка, спробуйте ще раз");
        i--;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let latestWatched;
let points;
const filmsCounter = 2;
const lengthLine = 25;

for (let i = 0; i < filmsCounter; i++) {
    // loop that check the name of the movie
    while (true) {
        latestWatched = prompt("Який фільм ви дивились нещодавно?", "");
        if (latestWatched && latestWatched.length <= lengthLine && latestWatched.trim() !== "") {
            break;
        } else {
            alert("Невірні дані! Спробуйте ще раз");
        }
    }
    //loop that check points of the movie
    while (true) {
        points = +prompt("Яка ваша оцінка?", "");
        if (points && !isNaN(points) && points > 0 && points <= 10) {
            break;
        } else {
            alert("Невірні дані! Спробуйте ще раз");
        }
    }
    personalMovieDB.movies[latestWatched] = points;
}
(personalMovieDB.count < 10) ? alert("Переглянуто дуже мало фільмів. Отримайте 30 днів безкоштовного необмеженого доступу до фільмів!") :
(personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert("Так тримати! Ви хороший глядач") :
(personalMovieDB.count >= 30 ) ? alert("Неймовірно! Ви справжній любитель кіно") :
alert("Виникла помилка");

console.log(personalMovieDB);