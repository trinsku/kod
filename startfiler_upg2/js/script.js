const slideImg = document.getElementById('slide-img');
const sliderNr = document.getElementById('slide-nr');
const slideHeading = document.getElementById('slide-heading');
const slideText = document.getElementById('slide-text');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');

const myArray = [
    {
        img: 'img/hast.jpg',
        heading: 'Häst',
        text: 'I bilden syns en häst.',
    },
    {
        img: 'img/hund.jpg',
        heading: 'Hund',
        text: 'I bilden ser du en hund.',
    },
    {
        img: 'img/varg.jpg',
        heading: 'Varg',
        text: 'I bilden kan man se en varg.',
    }
];

let current = 0;

function slideChange() {
slideImg.src = myArray[current].img;
slideHeading.textContent = myArray[current].heading;
slideText.textContent = myArray[current].text;

   sliderNr.textContent = `${current + 1} av ${myArray.length}`;
}


forwardBtn.onclick = function(){
    current = current +1;
    if (current >= myArray.length){
        current = 0;
    }
    slideChange();
}

backBtn.onclick = function(){
    current = current -1;
    if(current<0 ){
        current = myArray.length -1;
    }
    slideChange();
}

slideChange();