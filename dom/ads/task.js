const texts = document.getElementsByClassName('rotator__case');
let i = 0;


function getI () {
    if (i === (texts.length - 1)) {
        i = 0;
    } else {
        i++;
    }
    return i;
}

function changeText () {
    texts[i].classList.remove('rotator__case_active');
    getI();   
    texts[i].classList.add('rotator__case_active');
}

setInterval(changeText, 1000);
