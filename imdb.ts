import { Professional } from "./professional"
import { Movie } from "./movie"

export class Imdb
{
    public films:Movie[]
    constructor (films:Movie[])
    {
        this.films = films
    }
}