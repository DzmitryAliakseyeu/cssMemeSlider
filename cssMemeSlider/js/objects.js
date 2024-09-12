class Slider {
    constructor(src, text, id){
        this.src = src,
        this.text =text,
        this.id = id
    }
}

const slide1 = new Slider("./img/flying cat.jpg", "When the fridge is opening...", 1);

const slide2 = new Slider("./img/pig.svg", "When you asked to take a photo in a friendly way, but he takes a picture of you like this: “Thank you, now I have a photo for my driver’s license!", 2)

const slide3 = new Slider("./img/dog.jpg", "When you go to an important meeting, but also remain the most stylish: - “I’m not just a dog, I’m a gentledog!”", 3);

const slide4 = new Slider("./img/woman sit on the crocodile.png", "Do you ever saw how crocodile is asking for help?", 4);

export const arrSlidesInfo =[slide1, slide2, slide3, slide4];