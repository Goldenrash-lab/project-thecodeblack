function checkScreenWidth(mediaQuery) {
  let scrollButton = document.getElementById('scrollBtn');
  if (mediaQuery.matches) {
    scrollButton.style.display = 'none';
  } else {
    scrollButton.style.display = 'block';
  }
}

let mediaQuery = window.matchMedia('(max-width: 767px)');
checkScreenWidth(mediaQuery);

window.addEventListener('scroll', function() {
  let scrollButton = document.getElementById('scrollBtn');
  if (window.scrollY > window.innerHeight / 2 && !mediaQuery.matches) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

 document.getElementById('scrollBtn').addEventListener('click', function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth',
   });
 });