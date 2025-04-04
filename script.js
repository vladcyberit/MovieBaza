'use strict';

let latestWatched = "";
let points = 0;
const filmsCounter = 2;
const lengthLine = 25;
let myGenres = "";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        for (let i = 0; i < 1; i++) {
            personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?", "");
            if (personalMovieDB.count && !isNaN(personalMovieDB.count) && personalMovieDB.count > 0) {
                break;
            } else {
                alert("Невірні дані! Будь ласка, спробуйте ще раз");
                i--;
            }
        }
    },
    askMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        (personalMovieDB.count < 10) ? alert("Переглянуто дуже мало фільмів. Отримайте 30 днів безкоштовного необмеженого доступу до фільмів!") :
        (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert("Так тримати! Ви хороший глядач") :
        (personalMovieDB.count >= 30 ) ? alert("Неймовірно! Ви справжній любитель кіно") :
        alert("Виникла помилка");
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            myGenres = prompt(`Ваш улюблений жанр №${i}:`, "");
            if (myGenres && myGenres.length <= lengthLine && myGenres.trim() !== "" && isNaN(parseInt(myGenres.replace(/\D/g, "")))) {
                personalMovieDB.genres[i - 1] = myGenres;
            } else {
                alert("Невірні дані! Спробуйте ще раз");
                i--;
            }
        }
        //writeYourGenres feature modified with arrays
        // for (let i = 1; i < 2; i++) {
        //     myGenres = prompt(`Вкажіть ваші улюблені жанри через кому`, "");
        //     if (myGenres && myGenres.trim() !== "" && isNaN(parseInt(myGenres.replace(/\D/g, "")))) {
        //         personalMovieDB.genres = myGenres.split(", ");
        //     } else {
        //         alert("Невірні дані! Спробуйте ще раз");
        //         i--;
        //     }
        // }
        personalMovieDB.genres.forEach((elem, index) => {
            console.log(`Улюблений жанр №${index + 1} - это ${elem}`);
        });
    },
};

personalMovieDB.start();

personalMovieDB.askMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();