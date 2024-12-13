// Get elements
const modal = document.getElementById('modal');
const messageButton = document.getElementById('messageButton');
const closeButton = document.querySelector('.close-button');

// Show the modal when button is clicked
messageButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Hide the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Hide the modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


