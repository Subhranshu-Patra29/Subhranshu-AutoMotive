function showLogin() {
    document.getElementById("loginPopup").style.display = "flex";
  }
  
  function showSignup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("signupPopup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("signupPopup").style.display = "none";
  }

  

// Scroll to the Home section when clicking the Home link in the navbar
document.querySelector('.left-links a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });




  let currentIndex = 0;
  function showSlide(index) {
      const slider = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slide');
      if (index >= slides.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slides.length - 1;
      } else {
          currentIndex = index;
      }
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextSlide() {
      showSlide(currentIndex + 1);
  }

  function prevSlide() {
      showSlide(currentIndex - 1);
  }
  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // Auto slide every 3 seconds  


  // Add this script to handle modal functionality
function showSpecificationsBike() {
  document.getElementById('bikeModel').textContent = 'Harley Davidson Sportster S';
  document.getElementById('etype').textContent = 'Revolutions Max 1250T';
  document.getElementById('ecap').textContent = '1252 cc';
  document.getElementById('pow').textContent = '122.3 PS @7500 rpm';
  document.getElementById('tor').textContent = '125 Nm @ 6000 rpm';
  document.getElementById('gear').textContent = '6';
  document.getElementById('trans').textContent = 'Manual';
  document.getElementById('mile').textContent = '19.6 kmpl';
  document.getElementById('capaf').textContent = '11.8 L';
  document.getElementById('weight').textContent = '228 kg';
  document.getElementById('gnd').textContent = '90 mm';
  document.getElementById('extra').textContent = 'Call/ SMS Alert, Music Control, USB Charging, Tyre Pressure Monitoring';
  document.getElementById('price').textContent = '19.22 Lakhs';
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Close modal if clicked outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    closeModal();
  }
};
