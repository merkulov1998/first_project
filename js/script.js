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

if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30){
    console.log("Вы киноман!");
}else{
    console.log("Ошибка");
}

console.log(personalMovieDB);

