// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Tabbed Component
function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".projects-grid");
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
