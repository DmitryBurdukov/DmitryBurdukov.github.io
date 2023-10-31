window.addEventListener('DOMContentLoaded', () => {
    const rightTopVertical = document.querySelector('#right-top-vertical'),
          rightTopHorisontal = document.querySelector('#right-top-horisontal'),

          rightBottomVertical = document.querySelector('#right-bottom-vertical'),
          rightBottomHorisontal = document.querySelector('#right-bottom-horisontal'),

          leftBottomVertical = document.querySelector('#bottom-left-vertical'),
          leftBottomHorisontal = document.querySelector('#bottom-left-horisontal'),

          leftTopVertical = document.querySelector('#left-top-vertical'),
          leftTopHorisontal = document.querySelector('#left-top-horisontal'),

          box = document.querySelector('.radius'),
          valueBox = document.querySelector('.borderRadius__value'),
          copyBtn = document.querySelector('.copy');



    function changeValue(selector, styleValue) {
      switch (styleValue) {
          case 'borderTopLeftRadius':
              selector.style[styleValue] = `${leftTopVertical.value}% ${leftTopHorisontal.value}%`;
              setLocalStorageValue('ltv', leftTopVertical.value);
              setLocalStorageValue('lth', leftTopHorisontal.value);
              break;
          case 'borderTopRightRadius':
              selector.style[styleValue] = `${rightTopVertical.value}% ${rightTopHorisontal.value}%`;
              setLocalStorageValue('rtv', rightTopVertical.value);
              setLocalStorageValue('rth', rightTopHorisontal.value);
              break;
          case 'borderBottomRightRadius':
              selector.style[styleValue] = `${rightBottomVertical.value}% ${rightBottomHorisontal.value}%`;
              setLocalStorageValue('rbv', rightBottomVertical.value);
              setLocalStorageValue('rbh', rightBottomHorisontal.value);
              break;
          case 'borderBottomLeftRadius':
              selector.style[styleValue] = `${leftBottomVertical.value}% ${leftBottomHorisontal.value}%`;
              setLocalStorageValue('lbv', leftBottomVertical.value);
              setLocalStorageValue('lbh', leftBottomHorisontal.value);
              break;
        }

        valueBox.textContent = box.style.borderRadius;
        // console.log(valueBox)
    }
    console.log( box.style.borderRadius )
    rightTopVertical.addEventListener('input', (e) => changeValue(box, 'borderTopRightRadius'));
    rightTopHorisontal.addEventListener('input', (e) => changeValue(box, 'borderTopRightRadius'));

    rightBottomVertical.addEventListener('input', (e) => changeValue(box, 'borderBottomRightRadius'));
    rightBottomHorisontal.addEventListener('input', (e) => changeValue(box, 'borderBottomRightRadius'));

    leftBottomHorisontal.addEventListener('input', (e) => changeValue(box, 'borderBottomLeftRadius'));
    leftBottomVertical.addEventListener('input', (e) => changeValue(box, 'borderBottomLeftRadius'));

    leftTopVertical.addEventListener('input', (e) => changeValue(box, 'borderTopLeftRadius'));
    leftTopHorisontal.addEventListener('input', (e) => changeValue(box, 'borderTopLeftRadius'));

    function setLocalStorageValue(name, value) {
        // console.log(value)
        localStorage.setItem(name, value);

    }

    function getLocalStorageValue(name, itemRadius, defaultRadius = 0) {
        if (localStorage.getItem(name)) {
            // console.log(box.style.borderRadius);
            // valueBox.textContent = box.style.borderRadius;
            itemRadius.value = `${localStorage.getItem(name)}`;
            
            return localStorage.getItem(name)
        } else {
            // console.log('else')
            setLocalStorageValue(name, defaultRadius);
            itemRadius.value = `${defaultRadius}`;
            // console.log(itemRadius.value)
            return defaultRadius
        }
    }

    function setRadius() {
        box.style.borderRadius = `${getLocalStorageValue('ltv', leftTopVertical)}%
                                  ${getLocalStorageValue('rtv', rightTopVertical)}%
                                  ${getLocalStorageValue('rbv', rightBottomVertical)}%
                                  ${getLocalStorageValue('lbv', leftBottomVertical)}%/
                                  ${getLocalStorageValue('lth', leftTopHorisontal)}%
                                  ${getLocalStorageValue('rth', rightTopHorisontal)}%
                                  ${getLocalStorageValue('rbh', rightBottomHorisontal)}%
                                  ${getLocalStorageValue('lbh', leftBottomHorisontal)}%`;
        valueBox.textContent = box.style.borderRadius;
                                  
    }
    setRadius()
    console.log( box.style.borderRadius );
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(`border-radius: ${box.style.borderRadius}`).then(function() {
            console.log('Текст успешно скопирован в буфер обмена');
          }, function(err) {
            console.error('Произошла ошибка при копировании текста: ', err);
          });
    })
})

