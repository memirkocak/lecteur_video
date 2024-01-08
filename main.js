import './style.css'

let video = document.querySelector('#video')
let btnreset = document.querySelector('#reset')
let btnback = document.querySelector('#back')
let btnskip = document.querySelector('#skip')
let slidebar = document.querySelector('input')
let play = document.querySelector("#play")

video.addEventListener('click',()=>{
    slidebar.setAttribute('max', video.duration)
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
    slidebar.value = video.currentTime;
})

slidebar.addEventListener('input', ()=>{
    video.currentTime = slidebar.value;
})

