document.addEventListener('DOMContentLoaded', () => {
    const posters = document.querySelectorAll('.slide'),
          body = document.querySelector('body')

    function removeStyle(style, element) {
        element.forEach(item => {
            if (item.classList.contains(style)) {
                item.classList.remove(style);
            }
        });
    }

    function changeBackground(image) {
        body.style.cssText = `background-color: ${image}`;
        console.log(body)
    }

    posters.forEach(pstr => {
        pstr.addEventListener('click', (e) => {
            if (!e.target.classList.contains('active')) {
                removeStyle('active', posters)
                e.target.classList.add('active');
                changeBackground(e.target.getAttribute('data-color'))
            }
        })
    })
})