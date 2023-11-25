window.addEventListener('scroll', function() {
   let scrollButton = scrollBtn;
   if (window.scrollY > window.innerHeight / 2) {
     scrollButton.style.display = 'block';
   } else {
     scrollButton.style.display = 'none';
   }
 });
const scrollBtn = document.getElementById('scrollBtn')

 scrollBtn.addEventListener('click', function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });