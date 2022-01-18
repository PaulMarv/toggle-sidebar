
const sliderOpen = ()=>{
    document.querySelector('.slider-container').style.display='block';
}
document.querySelector('#btn-1').addEventListener('click', sliderOpen);

const sliderClose = ()=>{
    document.querySelector('.slider-container').style.display='none';
}
document.querySelector('#btn-2').addEventListener('click', sliderClose);

