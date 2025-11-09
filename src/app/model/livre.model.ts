export class Livre{
    titre! : string;
    imagesrc! : string;
    description! : string ;


    constructor(title: string , imagesrc: string , desc: string){
        this.titre = title;
        this.imagesrc =imagesrc;
        this.description = desc;
    }
}