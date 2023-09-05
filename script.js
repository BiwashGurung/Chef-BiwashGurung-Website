 // Initialize Font Awesome 
 window.FontAwesomeConfig = { autoReplaceSvg: 'nest' }
// Code For GoToUp Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var button = document.getElementById('goToTopButton');
    if (window.scrollY > 200) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});

// Code For scrollToMEnu
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Code for FooterYear
document.querySelector("footer .footer-year").textContent =
	new Date().getFullYear();




    


    

  
