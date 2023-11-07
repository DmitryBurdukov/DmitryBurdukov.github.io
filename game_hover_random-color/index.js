const container = document.querySelector('.container'),
      colorArray = ['#FF0000', '#BF3030', '#A60000', '#FF7400', '#A64B00', '#FFB273', '#CD0074', '#992667', '#85004B', '#00CC00', '#008500', '#67E667'],
      mainColor = '#1f1f1f';

function createFields(count, color) {
    for (let i = 0; i < count; i++) {
        let fieldItem = document.createElement('div');
        fieldItem.classList.add('box');
        fieldItem.style.backgroundColor = `${color}`;
        container.append(fieldItem)
        fieldItem.addEventListener('mouseover', () => overEffect(fieldItem));
        fieldItem.addEventListener('mouseleave', () => mouseLeave(fieldItem))
    }
}

createFields(400, mainColor);

function overEffect(elem) {
    const color = setRandomColor(colorArray)
    elem.style.background = `${color}`
    elem.style.boxShadow = `0 0 3px ${color}, 0 0 30px ${color}`;
}

function mouseLeave(elem) {
    elem.style.background = `${mainColor}`;
    elem.style.boxShadow = `0 0 0 ${mainColor}`;
}

function setRandomColor(array) {
    return array[Math.floor(Math.random() * (array.length - 1))]
}