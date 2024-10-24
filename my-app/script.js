document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Display the success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
  
    // Optionally, reset the form
    document.getElementById('contactForm').reset();
  });
  