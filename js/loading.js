window.addEventListener("DOMContentLoaded", ()=>{
const loading = document.querySelector('.loading')

    setTimeout(()=>{
        loading.style.display ='none'
        setTimeout(() => {
        
            loading.style.opacity = "0"
        }, 500);
        loading.style.opacity = "0"
    }, 2000);
})


//cursor
//const cursor = document.querySelector('.cursor');
//document.addEventListener('mousemove', (e)=>{
  //  cursor.style.left = e.pageX + 'px'
   // cursor.style.top = e.pageY + 'px'
//})