// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 100);
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scale-in")
  .forEach((el) => {
    observer.observe(el);
  });

// Page loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

// Initial setup
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.6s ease";

// Enhanced hover effects
document
  .querySelectorAll(
    ".service-card, .award-card, .testimonial-card, .contact-item"
  )
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });

// Phone click tracking
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", function () {
    console.log("Phone number clicked:", this.href);
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroCircle = document.querySelector(".hero-circle");
  if (heroCircle) {
    heroCircle.style.transform = `translateY(${scrolled * 0.3}px) scale(${
      1 + scrolled * 0.0002
    })`;
  }
});
