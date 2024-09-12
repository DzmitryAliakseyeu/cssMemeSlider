import { allSliderPoints, sliderContainer, textAll } from "./constants.js";
import { arrSlidesInfo } from "./objects.js";

let lastPositionSlide = 0;
const allSliderImages = document.querySelector('.slider__container-images').childNodes;

console.log(textAll);
 textAll.forEach((el, i)=> el.innerText = arrSlidesInfo[i].text)



allSliderPoints[0].children[0].classList.add('selected__point')
allSliderPoints.forEach((el) => el.addEventListener('click', (e) => {
    if(document.querySelector('.selected__point')){
        console.log('includes selected class');
        lastPositionSlide = document.querySelector('.selected__point').parentElement.id;
        console.log(lastPositionSlide)
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

    console.log(sliderContainer.children.length)
    if(id == 1 ){
        allSliderImages.forEach((el) => el.style = `left: ${(id - 1) * 100}%`);
        textAll.forEach((el) => el.style = `left: ${(id - 1) * 100}%`);
        console.log(`id === 0`)
    } else if (id == sliderContainer.children.length){
        allSliderImages.forEach((el) => el.style = `left: -${(id - 1) * 100 + 2}%`);
        textAll.forEach((el) => el.style = `left: -${(id - 1) * 100 + 2}%`);
    }  else {
        allSliderImages.forEach((el) => el.style = `left: -${(id - 1) * 100 + 1}%`);
        textAll.forEach((el) => el.style = `left: -${(id - 1) * 100 + 1}%`);
    }
}))