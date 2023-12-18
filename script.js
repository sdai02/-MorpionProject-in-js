let items = document.querySelectorAll('.footer__morpion .morpion__grid ul li button')
const x = document.getElementsByClassName('open__x-button')
const o = document.getElementsByClassName('open__o-button')
let hiden = document.querySelector('.morpion__open')
let begin

let checker = (index1, index2, index3, symbol) => {
    return items[index1].innerText.includes(symbol) &&
           items[index2].innerText.includes(symbol) &&
           items[index3].innerText.includes(symbol)

}

x[0].addEventListener('click', function(e){
    e.preventDefault()
    begin = 0
    hiden.style.display='none'

})

o[0].addEventListener('click', function(e){
    e.preventDefault()
    begin = 1
    hiden.style.display='none'
})


for(let i = 0; i < items.length; i++){

    items[i].addEventListener('click', function(event){
        event.preventDefault()


        if( begin === 0 && items[i].innerText == ""){

            let p = document.createElement('p')
            items[i].appendChild(p)
            p.innerText='x'
            begin += 1
           if(checker(0,1,2,'x')||checker(3,4,5,'x')|| checker(6,7,8,'x')|| checker(0,3,6,'x')|| checker(1,4,7,'x')|| checker(2,5,8,'x')|| checker(0,4,8,'x') ||checker(2,4,6,'x')){
                alert('win x')
                for(let i = 0 ; i < items.length; i++){
                    p.remove()
                }
            }
        }else if(begin == 1 && items[i].innerText == ""){

            let p = document.createElement('p')
            items[i].appendChild(p)
            p.innerText = "o"
            begin -= 1
            if(checker(0,1,2,'o')||checker(3,4,5,'o')|| checker(6,7,8,'o')|| checker(0,3,6,'o')|| checker(1,4,7,'o')|| checker(2,5,8,'o')|| checker(0,4,8,'o') ||checker(2,4,6,'o')){
                alert('win o')
                for(let i = 0 ; i < items.length; i++){
                    p.remove()
                }
            }
        }


    })

}


