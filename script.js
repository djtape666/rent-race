  const slider = document.getElementById('slider');
  const images = slider.children;
  const totalImages = images.length;
  let currentIndex = 0;

  const btnBackward = document.getElementById('btn_backward');
  const btnForward = document.getElementById('btn_forward');

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 1061}px)`;
  }

  btnBackward.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    updateSlider();
  });
  btnForward.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    updateSlider();
  });