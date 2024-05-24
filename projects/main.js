// main content
// let a = new Date().getSeconds()
// console.log(a)
const anchor = document.querySelectorAll(".list a");
anchor.forEach(element => {
    element.addEventListener("click", function () {
        view.removeAttribute("style");
    })
});
// project 1 code
const view = document.querySelector("#pro1");
const box = document.querySelectorAll(".box");
box.forEach(element => {
    element.addEventListener("click", function () {
        view.setAttribute("style", this.getAttribute("style"));
    })
})
document.querySelector("#reset").addEventListener("click", function () {
    view.removeAttribute("style");
})
// project 2 code
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
const para = document.querySelectorAll(".guide p");
submit.addEventListener("click", function () {
    let w = weight.value
    let h = height.value / 100
    if (w === '' || w === 0) {
        alert("Please enter weight in KG")
        return false;
    }
    else if (h === '' || h === 0) {
        alert("Please enter height in CM")
        return false;
    }
    let result = w / Math.pow(h, 2)
    output.innerHTML = `BMI : ${result.toFixed(2)}`;
    console.log(result)
    // document.getElementById("range").value = result;

    if (18.6 > result) {
        para[0].style.color = "rgb(225,225,225)"
        para[0].style.fontSize = '17px'
    }
    else if (18.6 < result && 24.6 > result) {
        para[1].style.color = "rgb(225,225,225)"
        para[1].style.fontSize = '17px'
    }
    else if (24.6 < result) {
        para[2].style.color = "rgb(225,225,225)"
        para[2].style.fontSize = '16px'
    }
});
// project 3
const date = document.querySelector(".date");
const day = document.querySelectorAll(".day span");
const span = document.querySelector(".day span")
const time = document.querySelector(".time");
function watch() {
    date.innerHTML = new Date().toLocaleDateString();
    setInterval(() => {
        time.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
    let dd = new Date().getDay();
    day[dd].style.color = 'rgb(69, 186, 233)';
    day[dd].style.background = 'black'
    day[dd].setAttribute("class", "current");
}
watch();
// project 4
let random = Math.floor(Math.random() * 10) + 1;
let guess = random;
const input = document.getElementById("guess");
const check = document.getElementById("check");
const chance = document.querySelector('#chance');
const predict = document.querySelector("#predict");
const enterd = document.querySelector("#enterd");
const reset = document.querySelector('#restart');
let slot = [];
let count = 2;
// let demo = document.getElementById("demo");
// demo.innerHTML=guess
function gameOver() {
    check.disabled = true;
    input.disabled = true;
    reset.style.visibility = 'visible';

}
function chances() {
    count -= 1
    chance.innerHTML = count;
    if (count == 0) {
        gameOver();
        predict.innerHTML = `Game Over guess is ${guess}`
    }
}
function highLow() {
    if (input.value > guess) {
        predict.innerHTML = `high`
    }
    else if (input.value < guess) {
        predict.innerHTML = `low`
    }
    else if (input.value == guess) {
        predict.innerHTML = `Winner`
        gameOver()
    }
}
function enterdNum() {
    slot.push(input.value)
    enterd.innerHTML = slot;
}
function game() {
    check.addEventListener('click', function () {
        if (input.value == false) {
            alert('enter guessess number 1 - 5');
            return false;
        }
        highLow();
        chances();
        enterdNum();
        input.value = '';

    })
}
function restartGame() {
    guess = Math.floor(Math.random() * 10) + 1;
    check.disabled = false
    input.disabled = false
    predict.innerHTML = 'High / Low'
    enterd.innerHTML = ''
    chance.innerHTML = '5'
    count = 2
    slot = []
    reset.style.visibility = "hidden"
    // demo.innerHTML=guess
}
game();

// project5
let intervalId;
const timeStart = document.getElementById('timestart')
const start = document.getElementById('start')
const stopp = document.getElementById('stop')
const currentTime = document.getElementById('time')
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(function () {
            currentTime.innerHTML = new Date().toLocaleTimeString()
            timeStart.style.backgroundColor = randomColor()
        }, 1000)
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}
start.addEventListener('click', startChangingColor)
stopp.addEventListener('click', stopChangingColor)

// project 6
// const main = document.getElementById("main");
const print = document.querySelector('#print');
let show = []
document.body.addEventListener('keypress', function (e) {
    show.push(e.key)
    print.innerHTML = show
})

// project 7
const avatar = document.querySelector('#avatar')
const userName = document.querySelector('#name')
const followers = document.querySelector('#followers')
const bio = document.querySelector('#about')
const loader = document.querySelector('#loading')
const url = 'http://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET',url)
xhr.onreadystatechange = function(){
    if(xhr.status === 0){
        loader.style.zIndex=1
    }
    else if(xhr.readyState===4){
        const data= JSON.parse(xhr.responseText)
       avatar.setAttribute('src',data.avatar_url)
       userName.innerHTML = data.name
       let follower = data.followers/1000
       followers.innerHTML = follower.toFixed(1)+'k'
       bio.innerHTML = data.bio
    }
   
}
xhr.send()

// setTimeout(function(){
//     let b = new Date().getSeconds()
//     console.log(b-a)
// },2000)
 
// let b = new Date().getSeconds()
// console.log(b)
