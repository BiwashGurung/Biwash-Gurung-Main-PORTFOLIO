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



//changing nav bar state
 window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-red-500', 'text-blue-500');
        if (link.getAttribute('data-target') === current) {
            if (current === 'home' || current === 'project') {
                link.classList.add('text-red-500');
            } else {
                link.classList.add('text-blue-500');
            }
        } else {
            link.classList.add('text-black-500');
        }
    });
});


