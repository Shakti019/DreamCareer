document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Simulated form submission, you can send form data to a server here
  const formData = new FormData(this);
  // You can perform further actions here like sending the form data to a server via AJAX
  displaySuccessMessage();
});

function displaySuccessMessage() {
  const successMessage = document.getElementById("success-message");
  successMessage.textContent = "Application submitted successfully!";
  successMessage.style.display = "block";
  // Reset form after submission
  document.getElementById("jobApplicationForm").reset();
}
