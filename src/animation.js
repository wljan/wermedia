import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import $ from 'jquery';





gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin, ScrollToPlugin);


export function setupAnimation(selector) {
    const intro = document.querySelector('.project-title');
    const text = document.querySelector('#myText');
    const mask = document.querySelector(".mask");
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });
    

    // Ensure the element is available before animating
    if (intro) {
      gsap.to(intro, {
        // duration: 2,
        // rotation: 360,
        ease: 'power2.inOut',
        marker: true,
        markers: {
          startColor: "purple",
          endColor: "red",
       }
      });
    } 

    // const showAnim = gsap.from('.main-tool-bar', { 
    //   yPercent: -200,
    //   paused: true,
    //   duration: 1
    // }).progress(1);
    
    // ScrollTrigger.create({
    //   start: "top top",
    //   end: "bottom bottom", // 999999
    //   onUpdate: (self) => {
    //     self.direction === -1 ? showAnim.play() : showAnim.reverse()
    //   }
    // });

    if (text){
    gsap.to("#myText", {duration: 2, text: "wer_media:", delay: 1});
    }

    const textElements = gsap.utils.toArray('.text');
    

textElements.forEach(text => {
  gsap.to(text, {
    
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: ".intro",
      start: 'top 5%',
      // end: () => `+=${getScrollAmount() * -1}`,'
      end: "bottom 950",
      ease: "power2.inOut",
      scrub: true,
  
      markers: {
        startColor: "yellow",
        endColor: "brown",
     }
    },
  });
});
gsap.to(mask, {
  
  width: "100%",
  scrollTrigger: {
    trigger: ".intro",
    start: 'top 5%',
    // end: () => `+=${getScrollAmount() * -1}`,
    end: "bottom 950",
      ease: "power2.inOut",
    scrub: 1,
    duration: 2,
    markers: {
      startColor: "white",
      endColor: "white",
   }
  }
});

// const container = document.querySelector(".container");
// const sections = gsap.utils.toArray(".container section");
// const texts = gsap.utils.toArray(".anim");


// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     end: "+=3000",
//     //snap: 1 / (sections.length - 1),
//     markers: true,
//   }
// });

// console.log(1 / (sections.length - 1))

// //Progress bar animation

// gsap.to(mask, {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     start: "top left",
//     scrub: 1
//   }
// });

// // whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");
  
//   // bump out if there's no items to animate
//   if(text.length === 0)  return 
  
//   // do a little stagger
//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//       markers: true
//     }
//   });
// });

// gsap.from(".undergoing")
let popup = gsap.timeline({
  scrollTrigger: {
    trigger: '.undergoing',
    start: '-50% center',
    end: '400% center',
    scrub: false,
    markers: true,
    toggleActions: 'play play play play'
  }
})

popup.to('.undergoing', {
  y: -10,
})

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 1) {
          $("#header_frame").addClass("header-active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("#header_frame").removeClass("header-active");
      }
  });
});


var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
  ease: 'power2.inOut',
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
  ease: 'power2.inOut',
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");



tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

const timeline = gsap.timeline();
timeline.to(".animate",{
    delay: 3,
    duration: .5,
    opacity: 0
});
timeline.to(".animation",{
    delay: 1,
    duration: 0.5,
    y: "100%",
    ease: "power4.out"
});
timeline.to(".animation",{
    zIndex: -1
});
timeline.from(".container h1",{
    delay: .5,
    duration: .8,
    skewY: 10,
    y: 100,
    x: -199,
    opacity: 0
})

const keys = document.querySelectorAll(".key");

function pressRandomKey() {
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  randomKey.style.animation = "pressDown 0.2s ease-in-out";

  randomKey.onanimationend = () => {
    randomKey.style.animation = "";
    setTimeout(pressRandomKey, 100 + Math.random() * 300);
  };
}

pressRandomKey();

}