$('.open--about').click(function() {
  $('.loading').addClass('loaded');
  $('.about').addClass('loaded');
});

$('.close--about').click(function() {
  $('.about').removeClass('loaded');
  $('.loading').removeClass('loaded');
});

function storeTheImage() {
    var imgCanvas = document.getElementById('pic-canvas'),
        imgContext = imgCanvas.getContext("2d");
	
    var img = document.getElementById('captured-pic');
    // Make sure canvas is as big as the picture BUT make it half size to the file size is small enough
    imgCanvas.width = (img.width/4);
    imgCanvas.height = (img.height/4);

    // Draw image into canvas element
    imgContext.drawImage(img, 0, 0, (img.width/4), (img.height/4));

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");
	
    // Save image into localStorage
    try {
        window.localStorage.setItem("imageStore", imgAsDataURL);
        $('.localstorage-output').html( window.localStorage.getItem('imageStore') );
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#captured-pic').attr('src', e.target.result);
            storeTheImage(); 
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$('.pic').on('change', function() {
  $('.evaluation').addClass('loaded');
  $('.loading').addClass('loaded');
  setTimeout(function() {$('.evaluation img').addClass('loaded animated fadeInLeft')}, 1000),
  setTimeout(function() {$('.verdict p').addClass('loaded animated fadeInUp fast')}, 2000),
  setTimeout(function() {$('.verdict svg').addClass('loaded animated fadeInUp faster')}, 4000),
  setTimeout(function() {$('.share p').addClass('loaded animated fadeInUp faster')}, 5000),
  setTimeout(function() {$('.share ul').addClass('loaded animated fadeInUp faster')}, 5000),
  setTimeout(function() {$('.evaluation .button-box').addClass('loaded animated fadeInUp faster')}, 6000),
  readURL(this);
});

$('.start--over').click(function() {
  $('.evaluation').removeClass('loaded');
  $('.loading').removeClass('loaded');
  setTimeout(function() {
    $('.evaluation img').removeClass('loaded animated fadeInLeft'),
    $('.verdict p').removeClass('loaded animated fadeInUp fast'),
    $('.verdict svg').removeClass('loaded animated fadeInUp faster'),
    $('.share p').removeClass('loaded animated fadeInUp faster'),
    $('.share ul').removeClass('loaded animated fadeInUp faster'),
    $('.evaluation .button-box').removeClass('loaded animated fadeInUp faster')
  }, 1500);
});