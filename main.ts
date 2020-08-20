import { Professional } from "./professional"
import { Movie } from "./movie"
import { Imdb } from "./imdb"

enum Profession {director, guionista, actor};

let julia:Professional= new Professional ("Julia Roberth",23,"Mujer",65,165,"Negro","Azules","Caucacica",true,"Americana",4,Profession.actor)
let will:Professional= new Professional ("Will Smith",50,"hombre",65,165,"Negro","Azules","Negro",true,"Americana",20,Profession.actor)
let matthew:Professional= new Professional ("Matthew McConaughey",45,"hombre",65,175,"Negro","negro","Negro",true,"Americano",4,Profession.actor)
let jason:Professional= new Professional ("Jason Sth",55,"hombre",58,180,"Blanco","negro","Negro",false,"Americano",4,Profession.actor)
let helen:Professional= new Professional ("Helen Hunt",45,"hombre",65,175,"Negro","negro","Negro",true,"Americana",4,Profession.guionista)
let paz:Professional= new Professional ("Paz Vega",45,"Mujer",65,175,"blanca","negro","Negro",false,"Española",4,Profession.director)

let Sharknado:Movie = new Movie ("Sharknado", 2011, "USA", "Z");
let Panther:Movie = new Movie ("Black Panther", 2016, "France", "Heroes");
let Doctor:Movie = new Movie ("Doctor Strange", 2014, "Italian", "Thriller");
let movies:Movie[] = [Sharknado, Panther, Doctor];

let prueba:Imdb = new Imdb (movies)

Sharknado.actors = [julia, will];
Sharknado.director = paz;
Sharknado.writer = helen;
Sharknado.language = "English";
Sharknado.platform = "Netflix";
Sharknado.isMCU = false;
Sharknado.mainCharacterName = "Phinley";
Sharknado.producer = "Firenado+";
Sharknado.distributor = "Cool surreal films"

Panther.actors = [matthew, jason];
Panther.director = paz;
Panther.writer = helen;
Panther.language = "French";
Panther.platform = "Golden";
Panther.isMCU = true;
Panther.mainCharacterName = "Georgina";
Panther.producer = "Camp";
Panther.distributor = "Look at this fish"

Doctor.actors = [julia, matthew, jason];
Doctor.director = paz;
Doctor.writer = helen;
Doctor.language = "Italian";
Doctor.platform = "Livin";
Doctor.isMCU = false;
Doctor.mainCharacterName = "Frances";
Doctor.producer = "Fresh";
Doctor.distributor = "What the hell!"

console.log(Sharknado.mostrarDatos());
console.log(prueba.films[0].mostrarDatos());
console.log(prueba.films[1].mostrarDatos());
console.log(prueba.films[2].mostrarDatos());




