"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(films) {
        this.films = films;
    }
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var myJson = JSON.stringify(this.films);
        fs.writeFileSync(nombreFichero, myJson);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var toRead = fs.readFileSync(nombreFichero);
        var object = new Imdb([]);
        object.films = JSON.parse(toRead);
        console.log(object);
        return object;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
;
