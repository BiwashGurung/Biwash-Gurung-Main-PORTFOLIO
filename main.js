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




    window.addEventListener('scroll', function() {
        var nav = document.querySelector('nav');
        var aboutSection = document.getElementById('about');
        var projectSection = document.getElementById('project');
        var contactSection = document.getElementById('contact');
        var scrollTop = window.scrollY;

        if (scrollTop >= aboutSection.offsetTop && scrollTop < projectSection.offsetTop) {
            document.querySelector('nav a[href="#about"]').style.color = "blue";
            document.querySelector('nav a[href="#project"]').style.color = "";
            document.querySelector('nav a[href="#contact"]').style.color = "";
        } else if (scrollTop >= projectSection.offsetTop && scrollTop < contactSection.offsetTop) {
            document.querySelector('nav a[href="#about"]').style.color = "";
            document.querySelector('nav a[href="#project"]').style.color = "red";
            document.querySelector('nav a[href="#contact"]').style.color = "";
        } else if (scrollTop >= contactSection.offsetTop) {
            document.querySelector('nav a[href="#about"]').style.color = "";
            document.querySelector('nav a[href="#project"]').style.color = "";
            document.querySelector('nav a[href="#contact"]').style.color = "green";
        } else {
            // Reset colors if none of the sections are scrolled to
            document.querySelector('nav a[href="#about"]').style.color = "";
            document.querySelector('nav a[href="#project"]').style.color = "";
            document.querySelector('nav a[href="#contact"]').style.color = "";
        }
    });


