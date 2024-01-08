import './style.css'

let video = document.querySelector('#video')
let btnreset = document.querySelector('#reset')
let btnback = document.querySelector('#back')
let btnskip = document.querySelector('#skip')
let slidebar = document.querySelector('#slide')
let play = document.querySelector("#play")

video.addEventListener('click',()=>{
    if(video.paused){
        video.play();
        play.hidden = true
    }
    else{
        video.pause();
        play.hidden = false
    }
})

btnreset.addEventListener('click',()=>{
    video.currentTime = 0
})

btnback.addEventListener('click',()=>{
    video.currentTime -= 5
})

btnskip.addEventListener('click',()=>{
    video.currentTime += 5
})

video.addEventListener('timeupdate', ()=>{
    console.log(Math.ceil(video.currentTime));
})