const sun = document.querySelector('.sun'),
moon = document.querySelector('.moon'),
body = document.querySelector('body'),
header = document.querySelector('header'),
itemList = document.querySelectorAll('nav ul li a'),
headerItem = document.querySelector('.headeritem'),

hamburgerMenu = document.querySelector('.hambergur-menu'),
menuLine1 = document.querySelector(".menuline1"),
menuLine2 = document.querySelector(".menuline2"),
menuLine3 = document.querySelector(".menuline3"),
navMenu = document.querySelector('nav ul'),
darkLogo = document.querySelector(".darklogo"),
whiteLogo = document.querySelector(".whitelogo");




hamburgerMenu.addEventListener('click',()=>{
menuLine1.classList.toggle('clicks')

menuLine2.classList.toggle('clicks')

menuLine3.classList.toggle('clicks')
navMenu.classList.toggle('remove')

})



moon.addEventListener('click', function(){

    body.classList.toggle('night');
    moon.classList.add('remove');
    sun.classList.add('active');
    header.classList.add('night');
    sun.style.opacity = "70%";
  headerItem.classList.add('night');
  menuLine1.style.background = '#f1f1f1';
  menuLine2.style.background = '#f1f1f1';
  menuLine3.style.background = '#f1f1f1';
darkLogo.style.display = "none";
whiteLogo.style.display = "block";
body.style.color = "#f1f1f1"
navMenu.style.background = '#111'


  for(let i =0; i<itemList.length; i++){
    itemList[i].style.color = '#f1f1f1'
   
    }
   // for(let i =0; i<sliderSpan.length; i++){
        //sliderSpan[i].style.background = '#ccc'
            
       // }
    

   
    })
 
        

    sun.addEventListener('click', function(){

        body.classList.toggle('night')
        sun.classList.remove('active')
        sun.classList.add('remove')
        moon.classList.remove('remove')
        header.classList.remove('night')
        headerItem.classList.remove('night')
        menuLine1.style.background = '#444'
        menuLine2.style.background = '#444'
        menuLine3.style.background = '#444'
        whiteLogo.style.display = "none"
        darkLogo.style.display = "block"
        body.style.color = "#444"
        navMenu.style.background = '#ebeef1'
        for(let i =0; i<itemList.length; i++){
            itemList[i].style.color = '#444'
                
            }
          //  for(let i =0; i<sliderSpan.length; i++){
              //  sliderSpan[i].style.background = '#000'
                    
             //   }
           
        })


        const boxes = document.querySelectorAll('.box');
        window.addEventListener('scroll', checkboxes);
        
        
        checkboxes()
        
        function checkboxes(){
           const triggerBottom =  window.innerHeight / 5*4
        
           boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
        
           });
        }

        window.addEventListener('DOMContentLoaded', function(){
            this.window.addEventListener('scroll', function(){
                const navbar = document.querySelector('.navbar');
                navbar.classList.toggle('sticky', window.scrollY >100);
               header.style.height = '80px'
          
                
            })

            })

        


            let today = new Date();
            let hours = today.getHours();
 
          
          let nightTime = 19;
            let morningTime = 7;

          if(hours>=nightTime || hours<morningTime){
            body.classList.toggle('night')
          
            moon.classList.add('remove')
            sun.classList.add('active')
            header.classList.add('night')
            sun.style.opacity = "70%"
          headerItem.classList.add('night');
          menuLine1.style.background = '#f1f1f1';
          menuLine2.style.background = '#f1f1f1';
          menuLine3.style.background = '#f1f1f1';
          darkLogo.style.display = "none";
          whiteLogo.style.display = "block";
          navMenu.style.background = '#111'
          for(let i =0; i<itemList.length; i++){
            itemList[i].style.color = '#fff'
                
            }
           // for(let i =0; i<sliderSpan.length; i++){
               // sliderSpan[i].style.background = '#ccc'
                    
               // }
          }
  
   