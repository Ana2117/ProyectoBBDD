"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.mostrarDatos = function () {
        var actores = [];
        for (var i = 0; i < actores.length; i++) {
            this.actors[i] = actores[i];
            console.log(actores);
        }
        ;
        var datos = ("Tittle: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Actors: " + this.actors + "\n" +
            "Nationality: " + this.nationality + "\n" + "Director: " + this.director.name + "\n" + "Writer: " + this.writer.name + "\n" + "Language: " +
            this.language + "\n" + "Platform: " + this.platform + "\n" + "Is MCU?: " + this.isMCU + "\n" + "Main character name: " + this.mainCharacterName +
            "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre);
        return (datos);
    };
    return Movie;
}());
exports.Movie = Movie;
;
