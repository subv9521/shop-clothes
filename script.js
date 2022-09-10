let getShowMenu = document.querySelector('.menu-mobile');
function showMenu() {
    getShowMenu.classList.add('d-block');
}

function hideShowMenu() {
    getShowMenu.classList.remove('d-block')
}

// slide //
const getImgContainer = document.querySelector('.img-slide')
const getImgSlide = document.querySelectorAll('.img-slide-link')

const getSlideAction = document.querySelector('.slide-action')
const getArrowLeft = document.querySelector('.slide-arrow-left')
const getArrowRight = document.querySelector('.slide-arrow-right')

let slideAction = document.querySelector('.slide-action p')
let indexImg = 1;
let imgNumber = getImgSlide.length;

getImgSlide.forEach((img, index) => {
    img.style.left = index*100 + '%';
})

function slideShow(number) {
    getImgContainer.style.left = `${-number*100}%`;
}

getArrowLeft.addEventListener('click', () => {
    indexImg--
    if (indexImg < 1) {
        indexImg = imgNumber;
    }
    slideShow(indexImg - 1);
    slideAction.innerHTML = `${indexImg}/${imgNumber}`;
})

getArrowRight.addEventListener('click', () => {
    indexImg++
    if (indexImg > imgNumber) {
        indexImg = 1;
    }
    slideShow(indexImg - 1);
    slideAction.innerHTML = `${indexImg}/${imgNumber}`;
})

function autoSlide() {
    indexImg++
    if (indexImg > imgNumber) {
        indexImg = 1;
    }
    slideShow(indexImg - 1);
    slideAction.innerHTML = `${indexImg}/${imgNumber}`;
}

setInterval(autoSlide, 5000);



