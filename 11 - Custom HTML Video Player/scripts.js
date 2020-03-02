//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build out functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  //or we can do it this way:
  //const method = video.paused ? 'play' : 'pause';
  //video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  //   console.log(icon);
  toggle.textContent = icon;
}

//skip buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

//progress bar
//1.updating button in real time
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
//progress bar
//2.when you click on it and drag it should update the video to correspond with that place
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  //   console.log(e);
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.msRequestFullscreen();
  }
}

//Hook up the event listners
video.addEventListener('click', togglePlay); //click the video to play/pause
video.addEventListener('play', updateButton); //when the video is played run updateButton
video.addEventListener('pause', updateButton); //when the video is paused run updateButton
video.addEventListener('timeupdate', handleProgress);//listen for the video to emit an event called timeupdate and when that happens we run handleProgress function
toggle.addEventListener('click', togglePlay); // click the button ► to play/pause
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); //listen for a change event on each of those ranges

//progress bar
let mousedown = false;
progress.addEventListener('click', scrub); //listen for a click -> when that happens run scrub function
progress.addEventListener('mousemove', e => mousedown && scrub(e)); //first checks mouse down variable and if it's true, it moves to checking scrub
/*Another way:
progress.addEventListener('mousemove', () => {
    if (mousedown) {
        scrub();
    }
});
*/
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
