//it will run the function debounce all the time when we scroll, but it will run the function checkSlide once every 20 miliseconds
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
//select all the images that we are going to be listening for
const sliderImages = document.querySelectorAll('.slide-in');

//function that will run every time the user scrolls
function checkSlide() {
  //loop over every single image and figure out where the image needs to be shown
  sliderImages.forEach(sliderImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2; //slide the image when it's in the middle (50% of the image)
    const imageBottom = sliderImage.offsetTop + sliderImage.height; //bottom of the image
    const isHalfShown = slideInAt > sliderImage.offsetTop; //image half shown
    const isNotScrolledPast = window.scrollY < imageBottom; //making sure user didn't scroll all the way past the image
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide)); //when the window is scrolled, we're gonna run the function checkSlide
