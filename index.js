const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const questionEl =document.getElementById("question");


const inputEl = document.getElementById("input");


const formEl = document.getElementById("form");


let score = JSON.parse(localStorage.getItem("score"));


if(!score){
    score = 0;
}


const scoreIncraese = document.getElementById("score");


scoreIncraese.innerText = `Your score is = ${score}`;


questionEl.innerHTML = `What is (${num1}*${num2})=??`;


const correctAns = num1*num2;


formEl.addEventListener("submit",() =>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updatelocalStorage()
    }
    else{
        score--;
        updatelocalStorage()
    }
});


function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}



