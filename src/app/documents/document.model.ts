export class Document {
    public name: string;
    public description : string;
    public image: string;

    constructor(name: string, desc: string, image: string){
        this.description = desc;

        this.name = name;
        this.image = image;
    }
}
