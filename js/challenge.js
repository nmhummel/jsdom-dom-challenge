const counter = document.getElementById("counter")
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const button = document.querySelectorAll('button')[3]
const likes = document.getElementsByClassName("likes")[0]

minus.addEventListener('click', dealWithMinus)
plus.addEventListener('click', dealWithPlus)
heart.addEventListener('click', dealWithHeart)

function dealWithMinus(event) {counter.innerHTML -- }
function dealWithPlus(event) {counter.innerHTML ++ }


function dealWithHeart(event){
    let tikTok = counter.innerHTML
    let jarOfHearts = document.getElementById(`${tikTok}`)
   
    if (jarOfHearts === null){
        jarOfHearts = document.createElement('li')
        likes.appendChild(jarOfHearts)
        jarOfHearts.id = `${tikTok}`
        num = 1
        jarOfHearts.innerHTML = `${tikTok} has been liked <span> ${num} </span> time`
        let clickCount = document.querySelector('span').innerHTML
    }
    else {
        jarOfHearts.innerHTML = `${tikTok} has been liked <span> ${num++} </span> times`
    }   
}  

timeHappens = function dealWithTimer() {
    timer = setInterval(setTime, 1000) 
    function setTime() {
        ++counter.innerHTML;
    }
}

timeHappens()

button.addEventListener('click', event => {
    if(event.target.id === 'pause'){
    clearInterval(timer)
    minus.removeEventListener('click', dealWithMinus, true)
    plus.removeEventListener('click', dealWithPlus, true)
    heart.removeEventListener('click', dealWithHeart, true)
    button.id =  'resume'
    button.innerHTML =  'resume'
    }
    else if(event.target.id === 'resume'){
    timeHappens()
    minus.addEventListener('click', dealWithMinus, true)
    plus.addEventListener('click', dealWithPlus, true)
    heart.addEventListener('click', dealWithHeart, true)
    button.id =  'pause'
    button.innerHTML =  'pause'
    }
})

 
const commentBox = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentBox.addEventListener('submit', dealWithSubmit)

function dealWithSubmit(event) {
  event.preventDefault();
  const newComment = document.getElementById("comment-input").value;
 commentList.innerHTML += `<p>${newComment}</p>`
 event.target.reset()
}