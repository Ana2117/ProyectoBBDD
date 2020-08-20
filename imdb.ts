import { Professional } from "./professional"
import { Movie } from "./movie"

export class Imdb
{
    public films:Movie[]
    constructor (films:Movie[])
    {
        this.films = films
    }

    // public mostrar():string
    // {
    //     let allInfo:string = "";
    //     for (let i = 0; i < this.films.length; i++)
    //     {
    //         allInfo += this.films[i].mostrarDatos + "\n"
    //     };
    //     return allInfo
    // }
};