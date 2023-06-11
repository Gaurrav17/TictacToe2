console.log("Welcome to tic tac toe")
let turn = "X"
let gameover = false

const changeturn = ()=>{
    if(turn === "X"){
        turn = "0"
    }
    else{
        turn = "X";
    }
    return turn;

}
const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtexts');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " " + "WON"
        gameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
    }
    
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
   let boxtexts = element.querySelector('.boxtexts');  
   element.addEventListener('click', ()=>{
         if(boxtexts.innerText === ''){
            boxtexts.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn For"  + " " + turn;
            }
         }
   })
})


reset.addEventListener('click', () => {
       let boxtexts = document.querySelectorAll('.boxtexts');
       Array.from(boxtexts).forEach(element =>{
         element.innerText = ""
       });
       gameover = false
       turn = "X";
       document.getElementsByClassName("info")[0].innerText = "Turn For"  + " " + turn;
       document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
       

})

//document.getElementsByClassName("box").innerHTML = "Hello World";
  