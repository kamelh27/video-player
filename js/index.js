const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause)

function handlePlay () {
  $play.hidden = true
  $pause.hidden = false
  $video.play()
}

function handlePause (){
  $play.hidden = false
  $pause.hidden = true
  $video.pause()
}

$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handleForward(){
  $video.currentTime += 10
}


function handleBackward() {
  $video.currentTime -= 10
}


const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata', handleLoade)
$video.addEventListener('timeupdate', handleTimeUpDate)

function handleLoade(){
  $progress.max = $video.duration
}

function handleTimeUpDate(){
  $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput () {
  $video.currentTime = $progress.value
}