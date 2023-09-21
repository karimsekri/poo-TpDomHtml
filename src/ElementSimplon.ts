import { ClassCollection } from "./ClassCollection"

export class ElementSimplon {

    private _nomBalise : string
    public innerText : string
    public classList : ClassCollection
    public style : { [key: string]: string; }

    constructor(monNomBalise : string) {
        this._nomBalise = monNomBalise;
        this.innerText = "";
        this.classList = new ClassCollection();
        this.style = {};
    }

    
    public get nomBalise() : string {
        return this._nomBalise;
    }
    
    public ajouterClasse(classe : string) {
        this.classList.add(classe);
    }
    
    public supprimerClasse(classe: string) {
        this.classList.remove(classe);
    }
    
   
    
    public ajouterContenu(contenu : string) {
        this.innerText = contenu;
    }
    
    public supprimerContenu() {
        this.innerText = '';
    }

    public ajouterStyle(propriete: string, value: string) {
        this.style[propriete] = value
    }
    
    public supprimerStyle(style: Object) {
        this.style = {}
    }
    

    public appendChild(elementHtmlChild: ElementSimplon): string {
        let maGrandeChaine = '<'+this.nomBalise+" "+this.classList+'>'+elementHtmlChild.toHTML()+'</'+this.nomBalise+'>'
        return maGrandeChaine;
      }

    public toHTML() : string {
        let maChaine = '<'+this._nomBalise+' '+ this.classList.toString()+'>'+this.innerText+'</'+this._nomBalise+'>'
        return maChaine
    }

}