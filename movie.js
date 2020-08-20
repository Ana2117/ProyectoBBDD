"use strict";
exports.__esModule = true;
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
        var datos = ("Tittle: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Actors: " + this.actors + "\n" +
            "Nationality: " + this.nationality + "\n" + "Director: " + this.director + "\n" + "Writer: " + this.writer + "\n" + "Language: " +
            this.language + "\n" + "Platform: " + this.platform + "\n" + "Is MCU?: " + this.isMCU + "\n" + "Main character name: " + this.mainCharacterName +
            "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre);
        return (datos);
    };
    return Movie;
}());
var Sharknado = new Movie("Sharknado", 2011, "USA", "Z");
Sharknado.platform = "Netflix";
console.log(Sharknado.mostrarDatos());
