//profession: dato enumerado(actor, guionista, director)[..]

enum Profession {director, guionista, actor};

class Professional
{
    public name:string
    public age:number
    public genre:string
    public weight:number
    public height:number
    public hairColor:string
    public eyeColor:string
    public race:string
    public isRetired:boolean
    public nacionality:string
    public oscarsNumber:number
    public profession:Profession

    constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isReteired:boolean,nacionality:string,oscarsNumber:number,profession:Profession)
    {
            this.name = name
            this.age = age
            this.genre = genre
            this.weight = weight
            this.height = height
            this.hairColor = hairColor
            this.eyeColor = eyeColor
            this.race = race
            this.isRetired = isReteired
            this.nacionality = nacionality
            this.oscarsNumber = oscarsNumber
            this.profession = profession
    }

        
        
}