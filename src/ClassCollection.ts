export class ClassCollection {

    public classes : string []

    constructor(mesClasses : string[] = []) {
        this.classes = mesClasses;
    }

    public add(classe : string) {
       this.classes.push(classe) ;
    }

    public remove(classe : string) {
        this.classes = this.classes.filter( (c) => c !== classe);        
    }


    public toString() : string{
        let maChaine = "class=" + this.classes.join(" ");
        return maChaine
    }
}
