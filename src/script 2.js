// Smooth Scrolling Functionality
function scrollToTargetSection(e) {
  e.preventDefault(); // Prevent default anchor behavior

  // Extract the target section ID from the href attribute of the clicked button
  const targetId = this.getAttribute('href').substring(1); // Remove the '#' character to get the ID
  const targetSection = document.getElementById(targetId);

  if (targetSection) { // Check if the target element exists
      let scrollToOptions = {
          behavior: 'smooth',
          top: targetId === 'contact' ? targetSection.offsetTop - window.innerHeight + targetSection.offsetHeight : targetSection.offsetTop
      };

      window.scrollTo(scrollToOptions);
  }
}

// Add the event listener to all buttons with the class 'scrollButton'
document.querySelectorAll('.scrollButton').forEach(button => {
  button.addEventListener('click', scrollToTargetSection);
});

// Logo Animation
const logoElement = document.querySelector('.logoC');
if (logoElement) {
  logoElement.addEventListener('animationend', function () {
      logoElement.classList.remove('initial');
      logoElement.classList.add('animated');
  });
}

