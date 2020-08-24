"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require("fs");
var readline = require('readline');
var myImdb = new imdb_1.Imdb([]);
myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Introduce tittle: ", function (tittle1) {
    rl.question("Introduce release year: ", function (release1) {
        rl.question("Introduce nationality: ", function (nationality1) {
            rl.question("Introduce genre: ", function (genre1) {
                var film4 = new movie_1.Movie(tittle1, release1, nationality1, genre1);
                myImdb.films.push(film4);
                myImdb.escribirEnFicheroJSON("imdbBBDD.json");
                rl.close();
            });
        });
    });
});
