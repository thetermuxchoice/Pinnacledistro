
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    transitionStart: function(){
    
    var videos = document.querySelectorAll('video');

    Array.prototype.forEach.call(videos, function(video){
        video.pause();
    });
    },
    
    transitionEnd: function(){
    
    var activeIndex = this.activeIndex;
    var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    activeSlideVideo.play();
    
    },

},
breakpoints: {
    0: {
    slidesPerView: "1",
    },
    768: {
        slidesPerView: "2",
    },
    1200: {
        slidesPerView: "4",

    }
}
});



var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    transitionStart: function(){
    
    var videos = document.querySelectorAll('video');

    Array.prototype.forEach.call(videos, function(video){
        video.pause();
    });
    },
    
    transitionEnd: function(){
    
    var activeIndex = this.activeIndex;
    var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    activeSlideVideo.play();
    
    },

},
breakpoints: {
    0: {
    slidesPerView: "1",
    },
    768: {
        slidesPerView: "2",
    },
    1200: {
        slidesPerView: "4",

    }
}
});