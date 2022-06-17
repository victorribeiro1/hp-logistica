const horizontalSlide = document.querySelector('.slider')

// horizontalSlide.addEventListener('wheel', event => {
//    event.preventDefault()
//    horizontalSlide.scrollLeft += event.deltaY

//    console.log(event)
// })

let windowWidth = window.innerWidth;

let horLength = document.querySelector(".element-wrapper").scrollWidth;

let distFromTop = document.querySelector(".horizontal-section").offsetTop;

let scrollDistance = distFromTop + horLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horLength + "px";


window.onscroll = function(){
  let scrollTop = window.pageYOffset;

  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  }
}

window.onresize = function() {
   windowWidth = window.innerWidth;
   horLength = document.querySelector(".element-wrapper").scrollWidth;

   distFromTop = document.querySelector(".horizontal-section").offsetTop;

   scrollDistance = distFromTop + horLength - windowWidth;
}