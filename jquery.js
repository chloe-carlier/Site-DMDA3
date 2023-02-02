//navbar

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


 // Test
 let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}



/* Contact form */
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_g87d7lf";
  const templateID = "template_reryf19";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

/*Footer*/

jQuery(document).ready(function($) {

  /* Set footer always on the bottom of the page */
  function footerAlwayInBottom(footerSelector) {
      var docHeight = $(window).height();
      var footerTop = footerSelector.position().top + footerSelector.height();

      if (footerTop < docHeight) {
          footerSelector.css("margin-top", (docHeight - footerTop) + "px");
      }
  }

  // Apply when page is loading 
  footerAlwayInBottom($("#footer"));

  // Apply when page is resizing
  $(window).resize(function() {
      footerAlwayInBottom($("#footer"));
  });
});