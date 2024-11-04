
// start Animation 
var typed = new Typed(".hero-subtitle", {
  strings: [" Larry Daniels", "Designer", " Developer",],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
});
// end Animation 




// start loading screen 
window.addEventListener("load",() => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");


 
})
// end loading screen 



const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
  if(window.scrollY > 200){
    navEl.classList.add('navbar-scrolled');
  }
  else if(window.scrollY < 200)
  {
    navEl.classList.remove('navbar-scrolled');
  }
});








