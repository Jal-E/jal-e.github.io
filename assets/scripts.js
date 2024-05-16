window.addEventListener('scroll', function() {
    const hour = new Date().getHours();
    const body = document.querySelector('body');
    if (hour >= 18 || hour <= 6) {
        body.style.backgroundImage = "url('/assets/space.jpg')";
    } else {
        body.style.backgroundImage = "url('/assets/nature.jpg')";
    }
});
