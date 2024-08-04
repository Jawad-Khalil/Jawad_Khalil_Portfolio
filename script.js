
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

window.addEventListener("scroll", function () {
    var scrollBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

// Add this script at the end of your HTML or in a separate JS file
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("footerYear").textContent = currentYear;
});
