
let sound = document.querySelector('.player');
let soundButton = document.querySelector('.sound-button');
soundButton.onclick = function () {
  player.classList.toggle('mute-theme');
};



const vidWrapper = document.querySelector('div.player');
const myVid = vidWrapper.querySelector('video.player__video');

// controls
const controlPlay = vidWrapper.querySelector('.player__button');
const controlPlayBtn = vidWrapper.querySelector('.play-btn');
// кнопка звука
const controlVolButton = vidWrapper.querySelector('.sound-button');
// 


const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
const controlProgress = vidWrapper.querySelector('.progress');
const progressBar = vidWrapper.querySelector('.progress__filled');

// events
var drag;
var grap;

myVid.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
controlPlayBtn.addEventListener('click', toggleVideo);
// new
controlVolButton.addEventListener('click', toggleVideo);
// new
controlVol.addEventListener('change', updateVol);
controlRate.addEventListener('change', updateRate);
controlFullScreen.addEventListener('click', goFullScreen);
controlSkip.forEach(control => control.addEventListener('click', forward));
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

var progression;

// functions
function toggleVideo() {
  if (myVid.paused) {
    myVid.play();
    controlPlay.innerHTML = "❚ ❚";
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
    controlPlayBtn.style.visibility = 'hidden';
  } else {
    myVid.pause();
    controlPlay.innerHTML = "►";
    clearInterval(progression);
    controlPlayBtn.style.visibility = 'visible';
  };
}
function updateVol(){
  var volume = this.value;
  myVid.volume = volume;
}




function updateRate(){
  var rate = this.value;
  myVid.playbackRate = rate;
}
function goFullScreen(){
  console.dir(myVid);
  if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
}
function forward(){
  var value = Number(this.dataset.skip);
  myVid.currentTime = myVid.currentTime + value;
}
function updateProgress() {
  var progress = myVid.currentTime / myVid.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}
function updateCurrentPos(e){
  // offset of the progress bar / video wrapper width
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  myVid.currentTime = newProgress * myVid.duration;
}


