const titlewrap = document.querySelector('.titlewrap');
const scroll1 = document.querySelector('#scroll1');
const beta = document.querySelector('.beta');
const betawrap = document.querySelector('.betawrap');
const betawrap2 = document.querySelector('.betawrap2');
const arrow = document.querySelector('.arrow');    
const hori = document.querySelector('.hori');
const verti = document.querySelector('.verti');

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;


titlewrap.addEventListener('animationend', function() {
    titlewrap.classList.add('disappear');
});

betawrap.addEventListener('animationend', function() {
    betawrap.classList.add('betawrap1');
    betawrap.classList.remove('betawrap');
});

arrow.addEventListener('animationend', function() {
    arrow.classList.add('arrow1');
    arrow.classList.remove('arrow');
});

window.addEventListener('scroll', scrollanimations);
function scrollanimations() {
    const bottom = window.innerHeight;
    const triggerbottom = bottom * 4 / 5;

    const scroll1top = scroll1.getBoundingClientRect().top;

    if (scroll1top < triggerbottom){
        let opacityValue = ((triggerbottom - scroll1top) / triggerbottom) + 0.25;
        opacityValue = Math.min(Math.max(opacityValue, 0), 1);

        beta.style.opacity = opacityValue;

        let moveValue = ((triggerbottom - scroll1top) / triggerbottom);
        moveValue = Math.min(Math.max(moveValue, 0), 1);

        arrow.style.opacity = 1 - moveValue*2;
        arrow.style.transform = `translateY(${moveValue * 50}px)`;
        betawrap.style.transform = `scale(${0.05*moveValue + 1})`

    } else {
        beta.style.opacity = 0.25;
        arrow.style.opacity = 1;
        arrow.style.transform = `translateY(0)`;
        betawrap.style.transform = `scale(1)`
    }


    const scroll2top = scroll2.getBoundingClientRect().top;
    if (scroll2top < bottom){
        betawrap.style.visibility = `hidden`
        betawrap2.style.visibility = `visible`
    } else {
        betawrap2.style.visibility = `hidden`
        betawrap.style.visibility = `visible`
    }


    const totalHeight = verti.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 2 * screenHeight){

        const progress = scrollPosition - 2 * screenHeight
        const scrollX = progress * screenWidth / screenHeight
        hori.scrollLeft = scrollX;
    }
    
}

