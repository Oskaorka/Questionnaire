'use strict'

window.addEventListener('DOMContentLoaded', ()=> {

  const blkYears = document.querySelector('#block-years');
  const blockYearsText = document.querySelector('.block-years-text');
  const arrow = document.querySelector('.block-years-arrow');
  const dataYears = document.querySelectorAll('#data-year');
  const burgerMenu = document.querySelector('#burger-title');
  const btnClose = document.querySelector('#burger-close');
  const burgerNav = document.querySelector('.burger-nav-style');

  burgerMenu.addEventListener('click', ()=> {
    burgerNav.classList.toggle('burger-nav');
  })
  btnClose.addEventListener('click', ()=> {
    burgerNav.classList.add('burger-nav');
  })

  dataYears.forEach(dataYear => {
    dataYear.addEventListener('click', (el)=> {
      el.preventDefault();
      let dats = el.target.getAttribute('data-year');
      blockYearsText.textContent = dats;
    })
  })

  const yarsHiden = document.querySelector('.block-years-hiden');
  blkYears.addEventListener('click', (e)=> {
    
    blkYears.style.marginBottom = '25px';
    arrow.style.transform = 'rotate(45deg)'
    yarsHiden.classList.toggle('block-years-hiden');
    if(!yarsHiden.classList.contains('block-years-hiden')){
      blkYears.style.marginBottom = '400px';
      arrow.style.transform = 'rotate(-135deg)'
      }
  })
// add arrow haw check-box

  function addArrowChek() {
    const square = document.querySelectorAll('#square');
    
    square.forEach(e => {
      const divArr = document.createElement('div');
      e.addEventListener('click', (evnt)=> {

        evnt.target.append(divArr);
        divArr.classList.toggle('square-arrow');
      })
    })
  } 
  addArrowChek();


  const visualWrapper = document.querySelector('#visual-wrapper');
  const vwb = document.querySelector('#visual__wrapper-block');
  const vbNum = document.querySelector('.visual-block');
  let count = visualWrapper.getBoundingClientRect().left;

  function moveMarker(e) {
    let coordinateMarker = e.pageX - (count+15);
    let vbNumWidth = vbNum.getBoundingClientRect().width;

      vwb.style.left = coordinateMarker  + "px";
      vbNum.style.cssText = `
        width: ${coordinateMarker+25}px ;
        left: ${coordinateMarker+25}px;
      `
      if(coordinateMarker <= -15) {
       document.removeEventListener('mousemove', moveMarker);
      }
      if(coordinateMarker > 747||vbNumWidth == 768) {
        vwb.style.left = 738  + "px";
        vbNum.style.cssText = `
        width: ${765}px ;
        left: ${765}px;
      `
       document.removeEventListener('mousemove', moveMarker);
      }
  }

  vwb.addEventListener('mousedown', ()=>{
    document.addEventListener('mousemove', moveMarker);
  })
  vwb.addEventListener('mouseup', ()=>{
  document.removeEventListener('mousemove', moveMarker);
  })

})