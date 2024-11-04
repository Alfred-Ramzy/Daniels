// ^ ******** Type Js Code ********^//
var typed = new Typed(".AutoType", {
  strings: ["Alfred Ramzy", "Developer", "Designer"],
  backSpeed: 150,
  typeSpeed: 150,
  loop: true,
});

// ^ ******** Owl Carousel ********^//
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1500,
  dragEndSpeed: 1000,
});

// ^ ******** Counter Code ********^//
let valueDisplays = document.querySelectorAll(".numy");
let interval = 8000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// ^ ********  Sweet Alert Code ********^//
function showAlert() {
  Swal.fire({
    title: "Submission Successful!",
    text: "Thank you , Your message has been sent. We’ll get back to you shortly.",
    icon: "success",
  });
}
// ^ ********  Spinner Code ********^//
const spinnerWrapperEL = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapperEL.style.opacity = "0";
});

setTimeout(() => {
  spinnerWrapperEL.style.display = "none";
}, 2000);

// ^ ********  NavBar Color Code ********^//
let navRef = document.querySelector("nav");
document.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50 && window.scrollY <= 600) {
      navRef.classList.add("Then-scroll-dis");
      navRef.classList.remove("scroll-second");
    } else if (window.scrollY > 600) {
      navRef.classList.remove("Then-scroll-dis");
      navRef.classList.add("scroll-second");
    } else {
      navRef.classList.remove("Then-scroll-dis");
      navRef.classList.remove("scroll-second");
    }
  },
  { passive: true }
);

// ^ ********  Wow Js Code ********^//
new WOW().init();
