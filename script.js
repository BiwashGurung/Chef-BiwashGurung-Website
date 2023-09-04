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