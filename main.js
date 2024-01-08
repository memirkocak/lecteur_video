import './style.css'

let video = document.querySelector('#video')
let btnplay = document.querySelector('#play')
let reset = document.querySelector('#reset')
let back = document.querySelector('#back')
let skip = document.querySelector('#skip')
let slidebar = document.querySelector('#slide')

function videoplay(){
    video.play()
}

function reset(){
    slidebar.value = 0
}

btnplay.addEventListener('click',videoplay)

reset.addEventListener('click',reset)