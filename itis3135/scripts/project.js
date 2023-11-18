let form = document.getElementById('company-name');

window.onload = function() {
    var buttons = ['click-to-reserve'];
    buttons.forEach(function(button) {
        if(button == 'click-to-reserve') {
            document.getElementById(button).addEventListener('click', reservation);
        }
    });
}
/*
form.addEventListener('a', (e) => {
    e.preventDefault();


});
*/
function reservation() {
    alert("Go to Contact on the nav bar!");
}


let slideIndex = 1;
showSlides(slideIndex);

function slides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("preview");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}