'use strict';

let numberOfFilms;

for (let i = 0; i < 1; i++) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    if (numberOfFilms && !isNaN(numberOfFilms) && numberOfFilms > 0) {
        break;
    } else {
        alert("Невірні дані! Будь ласка, спробуйте ще раз");
        i--;
        continue;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const latestWatched1 = prompt("Який фільм ви дивились нещодавно?", ""),
//         points1 = +prompt("Яка ваша оцінка?", ""),
//         latestWatched2 = prompt("Який фільм ви дивились нещодавно?", ""),
//         points2 = +prompt("Яка ваша оцінка?", "");

// personalMovieDB.movies[latestWatched1] = points1;
// personalMovieDB.movies[latestWatched2] = points2;

let latestWatched;
let points;
const lengthLine = 25;

for (let i = 0; i < 2; i++) {
    // loop that check the name of the movie
    nameMovieLoop: while (true) {
        latestWatched = prompt("Який фільм ви дивились нещодавно?", "");
        if (latestWatched && latestWatched.length <= lengthLine && latestWatched.trim() !== "") {
            break;
        } else {
            alert("Невірні дані! Спробуйте ще раз");
            continue nameMovieLoop;
        }
    }
    //loop that check points of the movie
    pointsMovieLoop: while (true) {
        points = +prompt("Яка ваша оцінка?", "");
        if (points && !isNaN(points) && points > 0 && points <= 10) {
            break;
        } else {
            alert("Невірні дані! Спробуйте ще раз");
            continue pointsMovieLoop;
        }
    }
    personalMovieDB.movies[latestWatched] = points;
}
(personalMovieDB.count < 10) ? alert("Переглянуто дуже мало фільмів. Отримайте 30 днів безкоштовного необмеженого доступу до фільмів!") :
(personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert("Так тримати! Ви хороший глядач") :
(personalMovieDB.count >= 30 ) ? alert("Неймовірно! Ви справжній любитель кіно") :
alert("Виникла помилка");

console.log(personalMovieDB);