let counter = 827000;
setInterval(()=>{
document.querySelector('.number').innerText = counter;
counter++

},1000);



let counter2 = 6784000;
setInterval(() => {
document.querySelector('.numb').innerText = counter2;
counter2++

},100);


let counter3 = 51727;
setInterval(() => {
document.querySelector('.num').innerText = counter3;
counter3++

},1020);

let counter4 = 1562727;
setInterval(() => {
document.querySelector('.numbe').innerText = counter4;
counter4++

},820);

// Form popup 

const contactUs = document.querySelector('#form-contact')
const buttonTalkToUs = document.querySelector('.contact-me'),
overlay = document.querySelector('.overlay'),
remove = document.querySelector('.contact-us h6')

buttonTalkToUs.addEventListener('click', ()=>{
    contactUs.style.visibility = 'visible'
    overlay.style.visibility = 'visible'
 
})

overlay.addEventListener('click', ()=>{
    contactUs.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
})
remove.addEventListener('click', ()=>{
    contactUs.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
})



const example = document.querySelector('#example');
const container = document.querySelector('#animation10');
let wrapLeft = document.querySelector('.wrap-left');
let wrapRight = document.querySelector('.wrap-right');
let examP = document.querySelector('.examples');
let section = document.querySelectorAll('section');
let home = document.querySelector('#home');
let container2 =  document.querySelector('.container2');
let examfun = document.querySelector('.examfun');

let caseStudy = document.querySelector('.case-study');
let cases = document.querySelector('#cases');
let exampleAds = document.querySelector('#exampleads')
let adsVideo = document.querySelector('.ads-video');

exampleAds.addEventListener('click', function(){

adsVideo.style.display = 'block'
    wrapLeft.style.opacity = '0'
    wrapRight.style.opacity = '0'
   examfun.style.display = 'none'
    examP.style.display  =  "none"
    caseStudy.style.display = 'none'
    for(let i = 0; i< section.length; i++){
       section[i].style.display = 'none'
      }
      container2.style.display  =" none"
   }) 
   cases.addEventListener('click', function(){

      caseStudy.style.display = 'block'
        wrapLeft.style.opacity = '0'
        wrapRight.style.opacity = '0'
       adsVideo.style.display = 'none'
        examP.style.display  =  "none"
       examfun.style.display = 'none'
        for(let i = 0; i< section.length; i++){
           section[i].style.display = 'none'
          }
          container2.style.display  =" none"
       }) 


example.addEventListener('click', function(){

caseStudy.style.display = 'none'
 wrapLeft.style.opacity = '0'
 wrapRight.style.opacity = '0'
examfun.style.display = 'block'
 examP.style.display  =  "grid"
 adsVideo.style.display = 'none'
 for(let i = 0; i< section.length; i++){
    section[i].style.display = 'none'
   }
   container2.style.display  =" none"
}) 

home.addEventListener('click', function(){

    adsVideo.style.display = 'none'
    wrapLeft.style.opacity = '100'
    wrapRight.style.opacity = '100'
   caseStudy.style.display = 'none'
    examfun.style.display  =  "none"
    for(let i = 0; i< section.length; i++){
        section[i].style.display = 'block'
       }
       container2.style.display  ="block"
   })

