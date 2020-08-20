import { Professional } from "./professional"

class Movie
{
    public title:string
    public releaseYear:number
    public actors:Professional[]
    public nationality:string
    public director:Professional
    public writer:Professional
    public language:string
    public platform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor (title:string, releaseYear:number, nationality:string, genre:string)
    {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }

    public setDirector(director)
    {
        this.director = director
    }

    public mostrarDatos():string
    {
        let datos:string = ("Tittle: " + this.title + "\n" + "Release year: " + this.releaseYear + "\n" + "Actors: " + this.actors + "\n" +
        "Nationality: " + this.nationality + "\n" + "Director: " + this.director + "\n" + "Writer: " + this.writer + "\n" + "Language: " +
        this.language + "\n" + "Platform: " + this.platform + "\n" + "Is MCU?: " + this.isMCU + "\n" + "Main character name: " + this.mainCharacterName +
        "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre);
        
        return(datos);
    }
};

let Sharknado:Movie = new Movie ("Sharknado", 2011, "USA", "Z");

Sharknado.actors = [];
Sharknado.language = "English";
Sharknado.platform = "Netflix";
Sharknado.isMCU = false;
Sharknado.mainCharacterName = "Phinley";
Sharknado.producer = "Firenado+";
Sharknado.distributor = "Cool surreal films"

console.log(Sharknado.mostrarDatos());