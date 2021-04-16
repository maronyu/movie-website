$(document).ready(function(){
  $('.contentbox').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.section2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


var modal = document.getElementById('myNav');

var btn = document.getElementById('bordermenu');

var span = document.getElementsByClassName('closebtn')[0];

// When we click the button
btn.onclick = function() {
  modal.style.display = "block";
}


// When we click the close button

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere inside the modal it will close

window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById('myNav2');

var btn2 = document.getElementById('green');

var span2 = document.getElementsByClassName('cancel2')[0];
var span3 = document.getElementsByClassName('submit')[0];

// When we click the button
btn2.onclick = function() {
  modal2.style.display = "block";
}


// When we click the close button

span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere inside the modal it will close

window.onclick = function(event) {
  if(event.target == modal2) {
    modal2.style.display = "none";
  }
}