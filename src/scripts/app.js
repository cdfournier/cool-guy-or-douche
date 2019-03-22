const captureVideoButton = document.querySelector('.start');
const screenshotButton = document.querySelector('#capture');
const img = document.querySelector('.evaluation img');
const video = document.querySelector('.capture video');

const canvas = document.createElement('canvas');

var constraints = { video: { facingMode: "user" }, audio: false };


screenshotButton.onclick = video.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  // Other browsers will fall back to image/png
  img.src = canvas.toDataURL('image/webp');
};

setTimeout(function() {
  $('.logo').removeClass('animated fadeInDown fast delay-1s')
  $('#get-started').removeClass('animated fadeInUp faster delay-2s')
  $('.loading p a').removeClass('animated fadeInUp faster delay-3s')
}, 4000);

$('.get--started').click(function() {
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
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
  $('.evaluation').addClass('loaded'),
  setTimeout(function() {$('.evaluation img').addClass('loaded animated fadeInLeft')}, 1000),
  setTimeout(function() {$('.verdict p').addClass('loaded animated fadeInUp fast')}, 2000),
  setTimeout(function() {$('.verdict svg').addClass('loaded animated fadeInUp faster')}, 4000),
  setTimeout(function() {$('.share p').addClass('loaded animated fadeInUp faster')}, 5000),
  setTimeout(function() {$('.share ul').addClass('loaded animated fadeInUp faster')}, 5000),
  setTimeout(function() {$('.evaluation .button-box').addClass('loaded animated fadeInUp faster')}, 6000),
  $('.capture').removeClass('loaded')
});

$('.start--over').click(function() {
  $('.capture').addClass('loaded')
  $('.evaluation').removeClass('loaded'),
  $('.evaluation img').removeClass('loaded animated fadeInLeft'),
  $('.verdict p').removeClass('loaded animated fadeInUp fast'),
  $('.verdict svg').removeClass('loaded animated fadeInUp faster'),
  $('.share p').removeClass('loaded animated fadeInUp faster'),
  $('.share ul').removeClass('loaded animated fadeInUp faster'),
  $('.evaluation .button-box').removeClass('loaded animated fadeInUp faster')
});

$('.open--about').click(function() {
  $('.loading').addClass('loaded')
  $('.about').addClass('loaded')
});

$('.close--about').click(function() {
  $('.about').removeClass('loaded')
  $('.loading').removeClass('loaded')
});