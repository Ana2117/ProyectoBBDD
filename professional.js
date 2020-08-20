"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Profession;
(function (Profession) {
    Profession[Profession["director"] = 0] = "director";
    Profession[Profession["guionista"] = 1] = "guionista";
    Profession[Profession["actor"] = 2] = "actor";
})(Profession || (Profession = {}));
;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isReteired, nacionality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isReteired;
        this.nacionality = nacionality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.setName = function (newName) {
        this.name = newName;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Professional.prototype.getGenre = function () {
        this.genre;
    };
    Professional.prototype.setGenre = function (newGenre) {
        this.genre = newGenre;
    };
    Professional.prototype.getWeight = function () {
        return this.weight;
    };
    Professional.prototype.setWeight = function (newWeight) {
        this.weight = newWeight;
    };
    Professional.prototype.setHeight = function (newHeight) {
        this.height = newHeight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.setHairColor = function (newHairColor) {
        this.hairColor = newHairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.setEyeColor = function (newEyeColor) {
        this.eyeColor = newEyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.setRace = function (newRace) {
        this.race = newRace;
    };
    Professional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Professional.prototype.setIsRetired = function (newIsRetired) {
        this.isRetired = newIsRetired;
    };
    Professional.prototype.getNacionality = function () {
        return this.nacionality;
    };
    Professional.prototype.setNacionality = function (newNacionality) {
        this.nacionality = newNacionality;
    };
    Professional.prototype.getOscarsNumner = function () {
        return this.oscarsNumber;
    };
    Professional.prototype.setOscarsNumner = function (newOscarsNumber) {
        this.oscarsNumber = newOscarsNumber;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.setProfession = function (newProfession) {
        this.profession = newProfession;
    };
    Professional.prototype.mostrarDatos = function () {
        var datos = ("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" +
            "Weight: " + this.weight + "\n" + "Height: " + this.height + "\n" + "Hair color: " + this.hairColor + "\n" + "Eye color: " +
            this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Is retired?: " + this.isRetired + "\n" + "Nationality: " + this.nacionality +
            "\n" + "Oscars number: " + this.oscarsNumber + "\n" + "Peofession: " + this.profession);
        return (datos);
    };
    return Professional;
}());
exports.Professional = Professional;
;
