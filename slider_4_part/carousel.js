const carouselItems = document.querySelectorAll('.carousel__item'),
      imgWrpr = document.querySelectorAll('.img__wrpr'),
      description = document.querySelectorAll('.descr__item'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      slide = document.querySelector('.carousel__slide'),
      imageArray = ['https://images.unsplash.com/photo-1697807650304-907257330a3e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1697228312777-8c6e10ea1fcb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1591204541888-a4be13a1707a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1696530858341-0af6f8437d92?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1488415032361-b7e238421f1b?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

let currentSlide = 2;

// console.log(carouselItems)
prevBtn.addEventListener('click', (e) => {
    hideSlide(carouselItems);
    setTimeout( () => changeSlide(currentSlide, imgWrpr, imageArray, e), 500);
    setTimeout( () => showSlide(carouselItems), 500)});
nextBtn.addEventListener('click', (e) => {
    hideSlide(carouselItems);
    setTimeout( () => changeSlide(currentSlide, imgWrpr, imageArray, e), 500);
    setTimeout( () => showSlide(carouselItems), 500)});

function changeSlide(index, elements, array, e) {

    if (!e) {
        elements.forEach(item => {
            setSlide(index, array, item)
        });
        return
    }
    if (e.target.classList.contains('prev')) {
        --index;
    }
    if (e.target.classList.contains('next')) {
        ++index;
    }
    if (index < 0) {
        index = array.length - 1
    }
    if (index === array.length) {
        index = 0
    }

    elements.forEach(item => {

        setSlide(index, array, item)
    });
    currentSlide = index;
    
}

function setSlide(index, array, item) {

    if(item.classList.contains('first')) {
        item.style.background = `url(${array[index]}) 0 center/cover no-repeat`;
    } else if(item.classList.contains('second')) {
        item.style.background = `url(${array[index]}) 0 center/cover no-repeat`;
    } else if(item.classList.contains('third')) {
        item.style.background = `url(${array[index]}) 0 center/cover no-repeat`;
    } else if(item.classList.contains('fourth')) {
        item.style.background = `url(${array[index]}) 0 center/cover no-repeat`;
    }
    
}

changeSlide(currentSlide, imgWrpr, imageArray);

function hideSlide(items) {
    items.forEach(item => {
        if (item.querySelector('div').classList.contains('second')) {
            console.log(2)
            item.style.left = '-25%';
        }
        if (item.querySelector('div').classList.contains('third')) {
            console.log(3)
            item.style.left = '-50%';
        }
        if (item.querySelector('div').classList.contains('fourth')) {
            console.log(4)
            item.style.left = '-75%';
        }
    })
    // console.log('transition')
}

function showSlide(items, itemsClass) {
    items.forEach(item => {
        if (item.querySelector('div').classList.contains('second')) {
            console.log(2)
            item.style.left = '0%';
        }
        if (item.querySelector('div').classList.contains('third')) {
            console.log(3)
            item.style.left = '0%';
        }
        if (item.querySelector('div').classList.contains('fourth')) {
            console.log(4)
            item.style.left = '0%';
        }
    })
}

    // 
    // setTimeout( () => hideSlide(carouselItems), 1500)
// addClass(carouselItems)
// addClass(carouselItems, 'change')        left: -100px;