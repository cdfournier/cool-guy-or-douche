$('.open--about').click(function() {
  $('.start').addClass('hide');
  $('.about').addClass('show');
});

$('.close--about').click(function() {
  $('.about').removeClass('show');
  $('.start').removeClass('hide');
});

$('.open--disclaimer').click(function() {
  $('.about').removeClass('show');
  $('.disclaimer').addClass('show');
});

$('.close--disclaimer').click(function() {
  $('.disclaimer').removeClass('show');
  $('.about').addClass('show');
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
  $('.evaluation').addClass('show');
  $('.start').addClass('hide');
  setTimeout(function() {$('.evaluation img').addClass('show')}, 1000),
  setTimeout(function() {$('.verdict p').addClass('show')}, 2000),
  setTimeout(function() {$('.verdict svg').addClass('show')}, 4000),
  setTimeout(function() {$('.evaluation button').addClass('show')}, 5000),
  readURL(this);
});

$('.start--over').click(function() {
  $('.evaluation').removeClass('show');
  $('.start').removeClass('hide');
  setTimeout(function() {
    $('.evaluation img').removeClass('show'),
    $('.verdict p').removeClass('show'),
    $('.verdict svg').removeClass('show'),
    $('.evaluation button').removeClass('show')
  }, 1500);
});