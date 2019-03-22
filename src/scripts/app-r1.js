// CAMERA ACCESS
const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
  video: true,
};

captureButton.addEventListener('click', () => {
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
});


// CLICK EVENTS
$('.get--started').click(function() {
  $('.loading').addClass('loaded');
  $('.capture').addClass('loaded');
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
});
$('.close--capture').click(function() {
  player.srcObject.getVideoTracks().forEach(track => track.stop());
  setTimeout(function() {$('.loading').removeClass('loaded')}, 500);
  setTimeout(function() {$('.capture').removeClass('loaded')}, 500);
});
$('.capture--button').click(function() {
  player.srcObject.getVideoTracks().forEach(track => track.stop());
  $('.capture').removeClass('loaded');
  setTimeout(function() {$('.judgement').addClass('loaded')}, 1000);
  setTimeout(function() {$('.judgement canvas').addClass('animated fadeInLeft')}, 1000);
  setTimeout(function() {$('.judgement p').addClass('loaded')}, 1500);
  setTimeout(function() {$('.judgement .verdict').addClass('loaded')}, 3000);
  setTimeout(function() {$('.judgement .button-box').addClass('loaded')}, 5000);
});
$('.start--over').click(function() {
  $('.capture').addClass('loaded');
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      player.srcObject = stream;
    });
  $('.capture .viewfinder').addClass('animated zoomIn faster delay-1s');
  setTimeout(function() {$('.capture .viewfinder').removeClass('animated zoomIn faster delay-1s')}, 2000);
  $('.judgement').removeClass('loaded');
  $('.judgement canvas').removeClass('animated fadeInLeft');
  $('.judgement p').removeClass('loaded');
  $('.judgement .verdict').removeClass('loaded');
  $('.judgement .button-box').removeClass('loaded');
});