"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
var text = "";
rl.question("Introduce tittle: ", function (tittle1) {
    rl.question("Introduce release year: ", function (release1) {
        rl.question("Introduce nationality: ", function (nationality1) {
            rl.question("Introduce genre: ", function (genre1) {
                var newFilm = new movie_1.Movie(tittle1, release1, nationality1, genre1);
                var myImdb = new imdb_1.Imdb([]);
                myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json");
                myImdb.films.push(newFilm);
                myImdb.escribirEnFicheroJSON("imdbBBDD.json");
                rl.close();
            });
        });
    });
});
