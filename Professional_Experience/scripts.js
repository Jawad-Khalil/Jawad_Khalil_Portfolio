
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to section if URL has hash
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Scroll to Top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Navigation menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navList");
  const navLinks = navList.querySelectorAll("a");

  menuBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent closing when clicking the button
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.style.display = "none";
    });
  });

  // Close the menu if clicking outside
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!navList.contains(target) && target !== menuBtn) {
      navList.style.display = "none";
    }
  });

  // ✅ NEW: Add counters to h3 if more than one
  document.querySelectorAll(".job-details").forEach(function (section) {
    const h3s = section.querySelectorAll("h3");

    if (h3s.length > 1) {
      h3s.forEach(function (h3, index) {
        const counterSpan = document.createElement("span");
        counterSpan.textContent = index + 1 + ". ";
        counterSpan.style.color = "maroon";
        counterSpan.style.fontWeight = "bold";
        counterSpan.style.marginRight = "4px";
        h3.insertBefore(counterSpan, h3.firstChild);
      });
    }
  });
});
