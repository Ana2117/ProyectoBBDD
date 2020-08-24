"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var fs = require("fs");
var Profession;
(function (Profession) {
    Profession[Profession["director"] = 0] = "director";
    Profession[Profession["guionista"] = 1] = "guionista";
    Profession[Profession["actor"] = 2] = "actor";
})(Profession || (Profession = {}));
;
var julia = new professional_1.Professional("Julia Roberts", 33, "Mujer", 65, 169, "Negro", "Azules", "Caucásica", true, "Americana", 4, Profession.actor);
var will = new professional_1.Professional("Will Smith", 50, "Hombre", 90, 185, "Negro", "Azules", "Negro", true, "Americano", 20, Profession.actor);
var matthew = new professional_1.Professional("Matthew McConaughey", 65, "Hombre", 92, 195, "Negro", "Negro", "Negro", true, "Americano", 4, Profession.actor);
var jason = new professional_1.Professional("Jason Sth", 17, "Hombre", 58, 180, "Blanco", "negro", "Negro", false, "Holandés", 4, Profession.actor);
var helen = new professional_1.Professional("Helen Hunt", 45, "Hombre", 55, 164, "Negro", "negro", "Negro", true, "Turca", 4, Profession.guionista);
var paz = new professional_1.Professional("Paz Vega", 25, "Mujer", 65, 175, "Blanca", "Negro", "Negro", false, "Española", 4, Profession.director);
var Sharknado = new movie_1.Movie("Sharknado", 2011, "USA", "Z");
var Panther = new movie_1.Movie("Black Panther", 2016, "France", "Heroes");
var Doctor = new movie_1.Movie("Doctor Strange", 2014, "Italian", "Thriller");
var movies = [Sharknado, Panther, Doctor];
var prueba = new imdb_1.Imdb(movies);
Sharknado.actors = [julia, will];
Sharknado.director = paz;
Sharknado.writer = helen;
Sharknado.language = "English";
Sharknado.platform = "Netflix";
Sharknado.isMCU = false;
Sharknado.mainCharacterName = "Phinley";
Sharknado.producer = "Firenado+";
Sharknado.distributor = "Cool surreal films";
Panther.actors = [matthew, jason];
Panther.director = paz;
Panther.writer = helen;
Panther.language = "French";
Panther.platform = "Golden";
Panther.isMCU = true;
Panther.mainCharacterName = "Georgina";
Panther.producer = "Camp";
Panther.distributor = "Look at this fish";
Doctor.actors = [julia, matthew, jason];
Doctor.director = paz;
Doctor.writer = helen;
Doctor.language = "Italian";
Doctor.platform = "Livin";
Doctor.isMCU = false;
Doctor.mainCharacterName = "Frances";
Doctor.producer = "Fresh";
Doctor.distributor = "What the hell!";
console.log(Sharknado.mostrarDatos());
console.log(prueba.films[0].mostrarDatos());
console.log(prueba.films[1].mostrarDatos());
console.log(prueba.films[2].mostrarDatos());
var myJson = JSON.stringify(prueba);
fs.writeFile("imdbBBDD.json", myJson, function (err, result) {
    if (err) {
        console.log("error", err);
    }
    else {
        console.log("Your file has been created successfully!");
    }
    ;
});
/*
fs.writeFileSync("imdbBBDD.json", myJson);
*/
//5th update
/*
let data = fs.readFileSync("imdbBBDD.json", "utf-8")
let object:Imdb = JSON.parse(data)
console.log(object.films[0].title);
*/
var object = new imdb_1.Imdb([]);
fs.readFileSync("imdbBBDD.json", "utf-8", function (err, result) {
    if (err) {
        console.log("error", err);
    }
    else {
        console.log("Your file has been read!");
        object = JSON.parse(result);
    }
    ;
    console.log(object.films[0].title);
});
/*
prueba.escribirEnFicheroJSON("imdbBBDD.json");
let object:Imdb = prueba.obtenerInstanciaIMDB("imdbBBDD.json");
console.log(object.films[0].title);
*/ 
