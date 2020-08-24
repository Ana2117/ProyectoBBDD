import { Professional } from "./professional"
import { Movie } from "./movie"
import { Imdb } from "./imdb"
let fs = require("fs");
let readline = require('readline');

let myImdb: Imdb = new Imdb([])

myImdb = myImdb.obtenerInstanciaIMDB("imdbBBDD.json")

var rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Introduce tittle: ", (tittle1:string) => {
  rl.question("Introduce release year: ", (release1:number) => {
    rl.question("Introduce nationality: ", (nationality1:string) => {
      rl.question("Introduce genre: ", (genre1:string) => {
        let film4 : Movie = new Movie(tittle1, release1, nationality1, genre1)
        myImdb.films.push(film4);
        myImdb.escribirEnFicheroJSON("imdbBBDD.json")
        rl.close();
      })
    })
  })
});