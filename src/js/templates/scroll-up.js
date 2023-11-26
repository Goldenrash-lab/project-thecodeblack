

window.addEventListener('scroll', function() {
  let scrollButton = document.getElementById('scrollBtn');
  if (window.scrollY > window.innerHeight / 2 ) {
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