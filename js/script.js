'use strict';

const personalMovieDB = {
    count : 0,
    movies : {  
    },
    actors : {
    },
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const film = prompt("Один из последних просмотренных фильмов?", "").trim();
            const rate = prompt("На сколько оцените его?", "");
        
            if(film != null && rate != null && film != '' && rate != '' && film.length < 50){
                personalMovieDB.movies[film] = rate;
                console.log('done');
            }else{
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            console.log("Вы киноман!");
        }else{
            console.log("Ошибка");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === '' || genre === null){
                console.log('Вы ввели некорректные данные');
                i--;
            }else{
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        });
    }
};


