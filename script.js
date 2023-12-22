/* c'est les cases de mon morpion et qui sont en balise button
*/
const items = document.getElementsByClassName('ul__button')
/* c'est les buttons qui permet de savoir qui commence entre joueur "x" ou joueur "o" en fonction du clique
*/
const x = document.getElementsByClassName('open__x-button')
const o = document.getElementsByClassName('open__o-button')
/* la valeur "hiden" fait référence à la div qui est attribuée avec la classe "morpion __ open et "title" qui représente la balise "h2"
*/
const hiden = document.querySelector('.morpion__open')
const title = document.querySelector('h2')
/* "scoreX" et "scoreO" permet d'afficher le score et qui commence à "0" la balise 
utiliser est la balise span avec la classe "score__counter-x" et "score__counter-o" 
*/
const scoreX = document.getElementsByClassName('score__counter-x')
const scoreO = document.getElementsByClassName('score__counter-o')


/* la valeur begin permet de stocker l'information entre "1" et "0" sur qui commence, 
s'il est vide la partie ne se lance pas 
*/
let begin

/* le const equal permet de vérifier si les deux joueurs sont en égalité, 
il vérifie si tous les items [i].innerText est vide et donc renvoi sur false
mais s'il items contien quelque chose alors ça retourne à true, 
pour la boucle for, il permet d'appliquer sur tous les items [i] en false
*/

const equal = () => {
    for(let i = 0; i < items.length; i++){
        if(items[i].innerText == ""){
            return false;
        }
    }
    return true;
}

/* la fonction checker permet d'éviter de répéter le code 
*/


let checker = (index1, index2, index3, symbol) => {
    return items[index1].innerText.includes(symbol) &&
           items[index2].innerText.includes(symbol) &&
           items[index3].innerText.includes(symbol)
}

/* la fonction condition permet de vérifier si la condition de victoire est remplie soit par "x", soit par "o" et 
le || permet de voir si ce n'est pas cette condition de victoire est remplie alors on passe à la suivante "checker()"
*/

const condition = (symbole) =>{
   return checker(0,1,2,symbole)||checker(3,4,5,symbole)|| 
            checker(6,7,8,symbole)|| checker(0,3,6,symbole)|| 
            checker(1,4,7,symbole)|| checker(2,5,8,symbole)|| 
            checker(0,4,8,symbole) ||checker(2,4,6,symbole)
}

/* le hadleButtonclick c'est une fonction qui permet de faire disparaître 
les butons au moment du clique et applique le style en diplay none pour la faire disparaitre 
mais aussi de faire disparaitre la consigne
*/

let handleButtonClick = (button, number) => {
    button.addEventListener('click', function(e){
        e.preventDefault()
        begin = number
        hiden.style.display='none'
        title.style.display='none'
    })
}

/* la fonction win permet d'afficher le gagnant qui est soit joueur "x" ou joueur "o" et d'effacer tous les "x" ou les "o" 
*/

let win = (winner) => {
    alert(winner)
    for(let n = 0 ; n < items.length; n++){
        while (items[n].lastElementChild) {
            items[n].removeChild(items[n].lastElementChild);
        }
    }
}

/* la fonction print permet de créer une balise p, de le nommer avec un nom de classe 
puis de la placer sur une div et d'écrire soit "x" soit "o"  
*/
let print = (classe, item,letter) => {
    let p = document.createElement('p')
    p.classList.add(classe)
    items[item].appendChild(p)
    p.innerText= letter
}

/* la fonction printScore permet d'appliquer le score quand le joueur "x" ou joueur "o" a gagné
*/
let printScore = (attribut, value) => {
    attribut.innerText = value
}

/* x[0] et o[0] c'est les butons pour sélectionner qui commence la partie, le joueur "x" 
est considéré comme 0 et joueur "o" et représenté en "1" le même principe de "on" "off"
*/
handleButtonClick(x[0],0)
handleButtonClick(o[0],1)

/* scoreXValue et scoreOValue permet d'appliquer à quel chiffre il commence le score là il commence à "0"
 */
let scoreXValue = 0
let scoreOValue = 0

/* la boucle for permet de parcourir le tableau des items et que chaque items applique un événement "click"
j'applique un event.preventDefault() pour annuler l'evnnement qui recharge la page car le morpion est dans une balise "forme"
je fais un if pour signifier qui commence à jouer et que si la case est déjà cliquer on ne peut plus le re-cliquer
j'appelle la fonction print et applique les valeurs que la classe s'appelle "button__x" le "i" permet de signifier quel endroit
j'applique la lettre "x" ou "o"

quand le  joueur "x" clique sur une case la valeur begin à + 1 et passe à joueur "o" et que s'il clique sur une case différente de "x" ça fait - 1
et la valeur begin passe à 0 

pour la condition de victoire si condition("x") est remplie sa affiche une alerte WIN X avec la fonction factoriser de win et donc recommence la partie
avec scoreXValue ++, il permet de rajouter + 1 le score au gagnant et avec la fonction printScore d'appliquer au joueur gagnant
+ 1 et qu'il s'affiche sur le tableau de score

si les deux joueurs sont en égalité avec la condition de la fonction equal() passe à true et surpime tout les balises p avec les lettres "x" et "o"
c'est un moyen de recommencer la partie sans recharger la page
*/
for(let i = 0; i < items.length; i++){
   
    items[i].addEventListener('click', function(event){
        event.preventDefault()
        
        if( begin === 0 && items[i].innerText == ""){
            print('button__x',i,'x')
            begin += 1
            if(condition('x')){
                win('WIN X')
                scoreXValue ++
                printScore(scoreX[0],scoreXValue)
            }
            
            else if( equal()){
                for(let n = 0 ; n < items.length; n++){
                    while (items[n].lastElementChild) {
                        items[n].removeChild(items[n].lastElementChild);
                    }
                }
            }
        }else if(begin == 1 && items[i].innerText == ""){
            print('button__o',i,'o')
            begin -= 1

            if(condition('o')){
                win('WIN O')
                scoreOValue ++
                printScore(scoreO[0],scoreOValue)
            } else if( equal()){
                for(let n = 0 ; n < items.length; n++){
                    while (items[n].lastElementChild) {
                        items[n].removeChild(items[n].lastElementChild);
                    }
                }
            }
        }
       
    })
    
}
    


