import { allSliderPoints, imagesBlock, textAll, textBlock } from "./constants.js";
import { arrSlidesInfo } from "./objects.js";

let lastPositionSlide = 0;
textAll.forEach((el, i)=> el.innerText = arrSlidesInfo[i].text);

allSliderPoints[0].children[0].classList.add('selected__point')
allSliderPoints.forEach((el) => el.addEventListener('click', (e) => {
    if(document.querySelector('.selected__point')){
        lastPositionSlide = document.querySelector('.selected__point').parentElement.id;
        document.querySelector('.selected__point').classList.remove('selected__point')
    }

    const clickedEl = e.target;
    let id = clickedEl.id;

    if(clickedEl.className == 'point__circle'){
        clickedEl.classList.add('selected__point');
      
    } else {
        clickedEl.childNodes[0].classList.add('selected__point');
    }

    const parentElement = clickedEl.parentElement;
    if(!id) {
        id = parentElement.id;
    }

    if(id == 1 ){
        imagesBlock.style.transform = `translateX(${(id - 1) * 100}%)`;
        textBlock.style.transform = `translateX(${(id - 1) * 100}%)`;
    } else {
        imagesBlock.style.transform = `translateX(-${(id - 1) * 100}%)`;
        textBlock.style.transform = `translateX(${-(id - 1) * 100}%)`;
    }
}))