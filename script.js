const items = document.getElementsByClassName('ul__button')
const x = document.getElementsByClassName('open__x-button')
const o = document.getElementsByClassName('open__o-button')
const hiden = document.querySelector('.morpion__open')
const title = document.querySelector('h2')
const scoreX = document.getElementsByClassName('score__counter-x')
const scoreO = document.getElementsByClassName('score__counter-o')
let begin

let checker = (index1, index2, index3, symbol) => {
    return items[index1].innerText.includes(symbol) &&
           items[index2].innerText.includes(symbol) &&
           items[index3].innerText.includes(symbol)
}


let condition = (symbole) =>{
   return checker(0,1,2,symbole)||checker(3,4,5,symbole)|| 
            checker(6,7,8,symbole)|| checker(0,3,6,symbole)|| 
            checker(1,4,7,symbole)|| checker(2,5,8,symbole)|| 
            checker(0,4,8,symbole) ||checker(2,4,6,symbole)
}

let handleButtonClick = (button, number) => {
    button.addEventListener('click', function(e){
        e.preventDefault()
        begin = number
        hiden.style.display='none'
        title.style.display='none'
    })
}

let win = (winner) => {
    alert(winner)
    for(let n = 0 ; n < items.length; n++){
        while (items[n].lastElementChild) {
            items[n].removeChild(items[n].lastElementChild);
        }
    }
}

let print = (classe, item,letter) => {
    let p = document.createElement('p')
            p.classList.add(classe)
            items[item].appendChild(p)
            p.innerText=letter
}
let printScore = (attribut, value) => {
    attribut.innerText = value
}

handleButtonClick(x[0],0)
handleButtonClick(o[0],1)

let scoreXValue = 0
let scoreOValue = 0
for(let i = 0; i < items.length; i++){
   
    items[i].addEventListener('click', function(event){
        event.preventDefault()
        
        if( begin === 0 && items[i].innerText == ""){
            print('button__X',i,'x')
            begin += 1
            if(condition('x')){
                win('WIN X')
                scoreXValue ++
                printScore(scoreX[0],scoreXValue)
            }
        }else if(begin == 1 && items[i].innerText == ""){
            print('button__O',i,'o')
            begin -= 1
            if(condition('o')){
                win('WIN O')
                scoreOValue ++
                printScore(scoreO[0],scoreOValue)
            }
        }
    })}
    



