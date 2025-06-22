// Mobile Navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-active");
});

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Tabbed Component
function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  // event.target.classList.add("active");
}

// Add active class to clicked button
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active");
  });
});

// Add smooth scrolling and enhanced interactions
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add keyboard navigation
  document.addEventListener("keydown", function (e) {
    const activeButton = document.querySelector(".tab-button.active");
    const buttons = Array.from(document.querySelectorAll(".tab-button"));
    const currentIndex = buttons.indexOf(activeButton);

    if (e.key === "ArrowLeft" && currentIndex > 0) {
      buttons[currentIndex - 1].click();
    } else if (e.key === "ArrowRight" && currentIndex < buttons.length - 1) {
      buttons[currentIndex + 1].click();
    }
  });
});

// Add intersection observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item").forEach((item) => {
  observer.observe(item);
});

// Add smooth hover effects
document.querySelectorAll(".timeline-content").forEach((content) => {
  content.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
    const marker = this.nextElementSibling;
    if (marker && marker.classList.contains("timeline-marker")) {
      marker.style.transform = "scale(1.4)";
      marker.style.boxShadow = "0 0 25px rgba(0,0,0,0.4)";
    }
  });

  content.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    const marker = this.nextElementSibling;
    if (marker && marker.classList.contains("timeline-marker")) {
      marker.style.transform = "scale(1)";
      marker.style.boxShadow = "none";
    }
  });
});

// Contact Form
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset previous errors
  clearErrors();

  // Validate form
  let isValid = true;
  const formData = new FormData(form);

  // Check required fields
  const requiredFields = ["firstName", "lastName", "email", "message"];
  requiredFields.forEach((field) => {
    const input = document.getElementById(field);
    const value = formData.get(field);

    if (!value || value.trim() === "") {
      showError(field);
      isValid = false;
    }
  });

  // Validate email format
  const email = formData.get("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    showError("email");
    isValid = false;
  }

  // If form is valid, simulate form submission
  if (isValid) {
    const submitBtn = form.querySelector(".btn-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Simulate API call
    setTimeout(() => {
      successMessage.style.display = "block";
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }, 1500);
  }
});

function showError(fieldName) {
  const formGroup = document.getElementById(fieldName).closest(".form-group");
  const errorMessage = formGroup.querySelector(".error-message");

  formGroup.classList.add("error");
  errorMessage.style.display = "block";
}

function clearErrors() {
  const errorGroups = document.querySelectorAll(".form-group.error");
  const errorMessages = document.querySelectorAll(".error-message");

  errorGroups.forEach((group) => group.classList.remove("error"));
  errorMessages.forEach((message) => (message.style.display = "none"));
}

// Remove error styling when user starts typing
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const formGroup = input.closest(".form-group");
    if (formGroup.classList.contains("error")) {
      formGroup.classList.remove("error");
      formGroup.querySelector(".error-message").style.display = "none";
    }
  });
});
