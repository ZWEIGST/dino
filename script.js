const input = document.querySelector('.input');

input.addEventListener('keydown', (event) => {
    if([37, 39].indexOf(event.keyCode) === -1) {
        return;
    }
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');


    switch(event.keyCode) {
        case 37:
            event.preventDefault();
            event.stopPropagation();
            left.remove();
            break;

        case 39:
            event.preventDefault();
            event.stopPropagation();
            right.remove();
            break;
    }

});