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
    Movie.prototype.mostrarDatos = function () {
        var actores = "";
        for (var i = 0; i < this.actors.length; i++) {
            actores += this.actors[i].name + ", ";
        }
        ;
        var datos = ("Tittle: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Actors: " + actores + "\n" +
            "Nationality: " + this.nationality + "\n" + "Director: " + this.director.name + "\n" + "Writer: " + this.writer.name + "\n" + "Language: " +
            this.language + "\n" + "Platform: " + this.platform + "\n" + "Is MCU?: " + this.isMCU + "\n" + "Main character name: " + this.mainCharacterName +
            "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre);
        return (datos);
    };
    return Movie;
}());
exports.Movie = Movie;
;
