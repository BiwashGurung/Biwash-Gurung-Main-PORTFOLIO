//footer year
document.querySelector("footer .footer-year").textContent =
    new Date().getFullYear();



//go to up
 window.addEventListener('scroll', function() {
     var goToTopBtn = document.getElementById('goToTopBtn');
     if (window.scrollY > 300) {
         goToTopBtn.classList.remove('hidden');
     } else {
         goToTopBtn.classList.add('hidden');
     }
 });

 function goToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 }
