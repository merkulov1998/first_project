'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {  
    },
    actors : {
    },
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const film = prompt("Один из последних просмотренных фильмов?", "");
        const rate = prompt("На сколько оцените его?", "");
    
        if(film != null && rate != null && film != '' && rate != '' && film.length < 50){
            personalMovieDB.movies[film] = rate;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        console.log("Вы киноман!");
    }else{
        console.log("Ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

