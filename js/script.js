'use strict';

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {  
    },
    actors : {
    },
    genres: [],
    privat: false
};

let film1 = prompt("Один из последних просмотренных фильмов?", "");
let rate1 = prompt("На сколько оцените его?", "");
let film2 = prompt("Один из последних просмотренных фильмов?", "");
let rate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[film1] = rate1;
personalMovieDB.movies[film2] = rate2;

console.log(personalMovieDB);