import { ElementSimplon } from "./ElementSimplon";

//1. Créer un élément HTML de type div avec la classe "container" et le contenu "Hello World"
const elementHtml1 = new ElementSimplon('div');
elementHtml1.ajouterClasse('"container"');
elementHtml1.ajouterContenu("Hello World");
const monHtml1 = elementHtml1.toHTML();

//2. Afficher dans la console le code HTML de cet élément
console.log(monHtml1);

//3. Créer un élément HTML de type h1 avec la classe "title" et le contenu "Mon titre" avec le texte en couleur rouge
const elementHtml2 = new ElementSimplon('h1');
elementHtml2.ajouterClasse('"title"');
elementHtml2.ajouterContenu("Mon Titre");
elementHtml2.ajouterStyle("border", "1px solid red");
const monHtml2 = elementHtml2.toHTML();

//4. Afficher dans la console le code HTML de cet élément
console.log(monHtml2);

//5. Ajouter une méthode appendChild pour rajouter le titre créé précédemment dans une balise div de classe "container"
console.log(elementHtml1.appendChild(elementHtml2));


