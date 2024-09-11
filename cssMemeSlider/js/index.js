import { allSliderPoints } from "./constants.js";

let currentPositionSlide = 0;
const allSliderImages = document.querySelector('.slider__container-images').childNodes;

allSliderPoints[0].children[0].classList.add('selected__point')
allSliderPoints.forEach((el) => el.addEventListener('click', (e) => {
    if(document.querySelector('.selected__point')){
        console.log('includes selected class')
        document.querySelector('.selected__point').classList.remove('selected__point')
    }
    console.log(el);
    const clickedEl = e.target;
    let id = clickedEl.id;

    if(clickedEl.className == 'point__circle'){
        clickedEl.classList.add('selected__point');
      
    } else {
        clickedEl.childNodes[0].classList.add('selected__point');
        console.log(clickedEl.childNodes[0]);
    }
   

    const parentElement = clickedEl.parentElement;
    if(!id) {
        id = parentElement.id;
    }
    
    allSliderImages.forEach((el) => el.style = `left: -${(id - 1) * 100 + 1}%`);
})
)