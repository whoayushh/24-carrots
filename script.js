document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = document.querySelector('.slider-images');
    const lineSegments = document.querySelectorAll('.slider-line-segment');
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    let currentIndex = 0;

    function updateSlider() {
      const translateValue = -currentIndex * 100 + '%';
      sliderImages.style.transform = 'translateX(' + translateValue + ')';
      updateLineSegments();
    }

    function updateLineSegments() {
      lineSegments.forEach((segment, index) => {
        segment.classList.toggle('active', index === currentIndex);
      });
    }

    function moveToIndex(index) {
      currentIndex = index;
      updateSlider();
    }

    lineSegments.forEach((segment, index) => {
      segment.addEventListener('click', () => moveToIndex(index));
    });

    // Auto-play functionality (uncomment the line below to enable auto-play)
    // setInterval(() => moveToIndex((currentIndex + 1) % lineSegments.length), 3000);
  });

  scrollContainer.addEventListener('scroll', updateScrollIndicator);

  function updateScrollIndicator() {
    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
    scrollIndicator.style.transform = `translateX(${scrollPercentage}%)`;