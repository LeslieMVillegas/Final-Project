document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
  
    header.addEventListener('click', function() {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Change the color of the header text
      header.style.color = randomColor;
    });
  });
  
  function openPopup(imageUrl) {
    // Specify the width and height of the popup window
    var width = 600;
    var height = 400;
    
    // Calculate the left and top positions to center the window
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    // Open the popup window
    var popupWindow = window.open(imageUrl, 'ImagePopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    
    // Focus the popup window
    if (popupWindow) {
        popupWindow.focus();
    }
}

function startSlider() {
  let currentSlide = 0;
  let imageCount = document.querySelectorAll(".slider ul img");
  let images = document.querySelector(".slider ul");
  console.log(imageCount);
  console.log(images);
  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("img");
    images.style.transform = `translateX(0px)`;
    return;
  }

  images.style.transform = `translateX(-${currentSlide * 550}px)`;

  // Remove the active class from all dots
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Add the active class to the current dot
  dots[currentSlide].classList.add("active");

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
}, 3000);
