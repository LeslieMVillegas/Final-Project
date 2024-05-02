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


document.addEventListener('DOMContentLoaded', function() {
  const reviewContainer = document.getElementById('review-container');
  const reviewForm = document.getElementById('review-form');

  const reviews = [
      { rating: 5, comment: "Outstanding work! Highly recommended." },
      { rating: 1, comment: "Absolutely shite job. Never using this site again." },
      { rating: 4, comment: "LOVE LOVE LOVE. Contributed to more satisfied costomers:)" },
      { rating: 2, comment: "Mediocre performance, just mediocre." },
      { rating: 3, comment: "Good work overall, but could be better." }
  ]

  // Function to generate stars based on rating
  function generateStars(rating) {
      const filledStars = '⭐'.repeat(rating);
      const emptyStars = '☆'.repeat(5 - rating);
      return filledStars + emptyStars;
  }

  // Function to add a new review
  function addNewReview(event) {
      event.preventDefault();

      const rating = parseInt(document.getElementById('rating').value);
      const comment = document.getElementById('comment').value;

      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      
      const stars = generateStars(rating);

      reviewElement.innerHTML = `
          <p class="stars">${stars}</p>
          <p>${comment}</p>
      `;

      reviewContainer.insertBefore(reviewElement, reviewContainer.firstChild);
      reviewForm.reset();
  }

  reviewForm.addEventListener('submit', addNewReview);

  // Display existing reviews
  reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');

      const stars = generateStars(review.rating);

      reviewElement.innerHTML = `
          <p class="stars">${stars}</p>
          <p>${review.comment}</p>
      `;

      reviewContainer.appendChild(reviewElement);
  });
});
