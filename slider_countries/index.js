window.addEventListener('DOMContentLoaded', () => {
    const downBtn = document.querySelector('.down-button'),
          upBtn = document.querySelector('.up-button'),
          sidebar = document.querySelector('.sidebar'),
          mainSlide = document.querySelector('.main-slide'),
          container = document.querySelector('.container');

    const slidesCount = mainSlide.querySelectorAll('div').length;

    let activeSlideIndex = 0;

    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

    upBtn.addEventListener('click', () => {
        changeSlideNumber('up')
    })

    downBtn.addEventListener('click', () => {
        changeSlideNumber('down');
    })

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                changeSlideNumber('up');
                break;
            case 'ArrowRight':
                changeSlideNumber('up');
                break;
            case 'ArrowDown': 
            changeSlideNumber('down');
                break;
            case 'ArrowLeft': 
            changeSlideNumber('down');
                break;
            default:
                break;
        }
    })

    function changeSlideNumber(direction) {
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            } 
        }
        else if (direction === 'down') {
                activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1;
            }
        }
        const height = container.clientHeight;
        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    }
})

