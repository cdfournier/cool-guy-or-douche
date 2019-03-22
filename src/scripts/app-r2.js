// CAMERA ACCESS
const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const tracks = stream.getTracks();

const constraints = {
  video: true,
};

captureButton.addEventListener('click', () => {
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
});

$(document).ready(function() {

  setTimeout(function() {$('#get-started').removeClass('animated fadeInUp delay-2s')}, 4000);

  $('.get--started').click(function() {
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        player.srcObject = stream;
      var successCallback = function(error) {
        $('.loading').addClass('loaded'),
        $('.capture').addClass('loaded')
      };
      var errorCallback = function(error) {
        if (error.name == 'NotAllowedError') {
          // user denied access to camera
        }
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then(successCallback, errorCallback);
    });
  });

  $('.close--capture').click(function() {
    setTimeout(function() {$('.loading').removeClass('loaded')}, 500);
    setTimeout(function() {$('.capture').removeClass('loaded')}, 500);
  });

  $('.capture--button').click(function() {
    player.srcObject.getVideoTracks().forEach(track => track.stop());
    $('.evaluation').addClass('loaded'),
    setTimeout(function() {$('.evaluation canvas').addClass('loaded animated fadeInLeft')}, 1000),
    setTimeout(function() {$('.evaluation p').addClass('loaded animated fadeInUp')}, 2000),
    setTimeout(function() {$('.evaluation .verdict').addClass('loaded animated fadeInUp')}, 4000),
    setTimeout(function() {$('.evaluation .button-box').addClass('loaded animated fadeInUp')}, 6000),
    $('.capture').removeClass('loaded')
  });

  $('.start--over').click(function() {
    $('.capture').addClass('loaded')
    $('.evaluation').removeClass('loaded'),
    $('.evaluation canvas').removeClass('loaded animated fadeInLeft'),
    $('.evaluation p').removeClass('loaded animated fadeInUp'),
    $('.evaluation .verdict').removeClass('loaded animated fadeInUp'),
    $('.evaluation .button-box').removeClass('loaded animated fadeInUp')
  });

});
