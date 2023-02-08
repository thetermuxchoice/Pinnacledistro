// for a version that rotates things too, see https://codepen.io/GreenSock/pen/gOvQYrZ?editors=0010

gsap.registerPlugin(ScrollTrigger);

/*let limit = {max: 100, pullRatio: 0},
    getRandom = () => gsap.utils.random(-limit.max, limit.max),
    round = value => Math.round(value * 1000) / 1000,
    getModifier = home => value => {
      value = parseFloat(value);
      return round(value + (home - value) * limit.pullRatio) + "px";
    };

gsap.utils.toArray(".box").forEach((element) => {
  wander(element, gsap.getProperty(element, "x"), gsap.getProperty(element, "y"))
});

function wander(element, homeX, homeY) {
  gsap.set(element, {
    x: homeX + (gsap.getProperty(element, "x") - homeX) / (1 - limit.pullRatio),
    y: homeY + (gsap.getProperty(element, "y") - homeY) / (1 - limit.pullRatio)
  })
  gsap.to(element, {
    x: homeX + getRandom(),
    y: homeY + getRandom(),
    modifiers: {
      x: getModifier(homeX),
      y: getModifier(homeY)
    },
    duration: gsap.utils.random(1.5, 4), 
    ease: "sine.inOut",
    onComplete: () => wander(element, homeX, homeY)
  });

}



// pull toward "home" position more and more as you scroll down
gsap.to(limit, {
  pullRatio: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    start: "bottom center",
    end: "bottom 100px",
    scrub: true,
    markers: true
  }
})*/


$('.box').css({
  'top' : 0,
  'left' : 0,
  'right' : 0,
  'bottom' : 0,
  'transform' : 'rotate(25deg)',
});

$('.box1').css({
  'top' : 0,
  'left' : 350,
  'right' : 0,
  'bottom' : 0,
  'transform' : 'rotate(25deg)',
});

$('.box2').css({
  'top' : 0,
  'left' : 700,
  'right' : 0,
  'bottom' : 0,
  'transform' : 'rotate(25deg)',
});



var tl = gsap.timeline({
  // scrollTrigger: tlSettings,
  scrollTrigger: {
    trigger: '.container',
    start: 40,
    end: 'bottom 100px',
    scrub: true,
    markers: false,
  }
});

tl.to('.box', {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  rotation: 0,
}, 0);

tl.to('.box1', {
  top: 0,
  left: 350,
  right: 0,
  bottom: 0,
  rotation: 0,
}, 0);

tl.to('.box2', {
  top: 0,
  left: 700,
  right: 0,
  bottom: 0,
  rotation: 0,
}, 0);
