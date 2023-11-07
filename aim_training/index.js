const startBtn = document.querySelector('.start'),
      screen__start = document.querySelector('.screen__start'),
      timeScreen = document.querySelector('#timeScreen'),
      setTimeBtn = document.querySelectorAll('.time-btn'),
      board = document.querySelector('#board'),
      colorArray = ['red', 'blue', 'yellow', 'green', 'white'];
let timeOfGame = document.querySelector('#time'),
    time = 0,
    interval = null,
    clickCounter = 0;

startBtn.addEventListener('click', () => openNextScreen(screen__start))

setTimeBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        timeOfGame.textContent = `00:${parseInt(e.target.textContent)}`;
        startGame(e.target);
        openNextScreen(timeScreen);
    })
});

// startGame(null, timeOfGame) //DEBUG

function openNextScreen(prev) {
    prev.classList.add('up');
}

function startGame(elem) {
    time = parseInt(elem.textContent);
    time = (time < 10) ? `0${time}` : time;
    elem.textContent = `00:${time}`;
    interval = setInterval(() => decreaseTime(),1000);
    createCircle();
}

function decreaseTime() {
    time--;
    time = (time < 10) ? `0${time}` : time;
    timeOfGame.textContent = `00:${time}`;
    stopGame(interval);
}

function stopGame(interval) {
    if (time <= 0) {
        document.querySelector('.timeLine').classList.add('hide');
        clearInterval(interval);
        board.innerHTML = `Ваш счет:  <span class="primary">${clickCounter}</span>`
    }
}

function createCircle() {
    if (time > 0) {
        const size = `${setRandomSize()}`;
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.background = `${colorArray[setRandomColor(colorArray)]}`;
        circle.style.height = `${size}px`;
        circle.style.width = `${size}px`;
        setPosition(circle);
        board.append(circle);
        clickByElement(circle)
    } 
}

function removeCircle(elem) {
    elem.remove();
}

function setRandomSize() {
    return Math.floor(Math.random()*50) + 10;
}

function setPosition(elem) {
    const foolWidth = board.clientWidth,
          foolHeight = board.clientHeight;
    
    elem.style.top = `${Math.floor(Math.random()*(foolHeight - parseInt(elem.style.height)))}px`;
    elem.style.left = `${Math.floor(Math.random()*(foolWidth - parseInt(elem.style.width)))}px`;
}

function clickByElement(elem) {
    elem.addEventListener('click', (e) => {
        clickCounter++;
        removeCircle(elem);
        createCircle();
        console.log(clickCounter);
    })
}

function setRandomColor(arr) {
    return Math.floor(Math.random() * (arr.length))
}