document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links ul');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});
