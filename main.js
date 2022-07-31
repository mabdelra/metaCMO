
 const mobileBtn = document.getElementById('menu-button');
 const mobileMenu = document.getElementById('mobile-menu-2')


 const smallScreen = document.documentElement.clientWidth || window.innerWidth;

if(smallScreen <= 1028){
  mobileMenu.classList.add("closeMenu")
  mobileBtn.addEventListener("click", () => {
   mobileMenu.classList.toggle("closeMenu")
  })
}

// Typewriter animation

const TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
TxtType.prototype.tick = function () {
let i = this.loopNum % this.toRotate.length;
let fullTxt = this.toRotate[i];

if (this.isDeleting) {
this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

let that = this;
let delta = 135 - Math.random() * 100;

setTimeout(function () {
that.tick();
}, delta);
};

window.onload = function () {
let elements = document.getElementsByClassName("typewriter");
for (let i = 0; i < elements.length; i++) {
let toRotate = elements[i].getAttribute("data-type");
let period = elements[i].getAttribute("data-period");
if (toRotate) {
new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// Second Logo Slider

// const slider = document.querySelector('#logoSlider');
// let secondSlider = slider.cloneNode(true);
// // document.getElementById('slider-2').appendChild(secondSlider)
// document.getElementById('slider-3').appendChild(secondSlider)

// document

// const slider2 = document.querySelector('#services-bar');
// let thirdSlider = slider2.cloneNode(true);
// // document.getElementById('slider-2').append(thirdSlider)
// document.getElementById('services-slider').append(thirdSlider)


// SWIPER JS

var swiper = new Swiper(".mySwiper-mobile", {
  spaceBetween: 50,
  // direction: "horizontal",
  // pagination: {
  //   el: ".mySwiper-mobile2.swiper-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // },
  allowTouchMove: false,
  watchSlidesProgress: true,
  speed: 0,
  // cssMode: true,
  navigation: {
  nextEl: ".nextBtn",
  prevEl: ".prevBtn",
  },
  clickable: false
  });
  var swiper2 = new Swiper(".mySwiper2-mobile", {
  direction: "vertical",
  mousewheel: false,
  spaceBetween: 50,
  followFinger: true,
  autoHeight: true,
  pagination: {
  el: ".swiper-p©agination",
  // clickable: true,
  }
  })

// const wrapper = document.querySelector('.wrapper svg')

// window.addEventListener('load', () => {
//     wrapper.classList.add('active')
// })

// cursor

// document.documentElement.style.cursor = 'none';

// new kursor({
// 	type: 1,
//   removeDefaultCursor: true,
//   color: '#a753ff',
// })

// Animation

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml9 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml9 .letter',
//     scale: [0, 1],
//     duration: 1500,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1)
//   }).add({
//     targets: '.ml9',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

  // Vanilla Tilt


VanillaTilt.init(document.querySelectorAll(".info-card"), {
  max: 10,
  speed: 400,
  scale:1.05,  
});

VanillaTilt.init(document.querySelectorAll(".info-card2"), {
  max: 10,
  speed: 400,
});

VanillaTilt.init(document.querySelectorAll(".info-card3"), {
  max: 1,
  speed: 400,
});

// const updateProperties = (elem, state) => {

// 	elem.style.setProperty('--x', `${ state.x }px`)
// 	elem.style.setProperty('--y', `${ state.y }px`)
// 	elem.style.setProperty('--width', `${ state.width }px`)
// 	elem.style.setProperty('--height', `${ state.height }px`)
// 	elem.style.setProperty('--radius', state.radius)
// 	elem.style.setProperty('--scale', state.scale)

// }

// document.querySelectorAll('.cursor').forEach((cursor) => {

// 	let onElement

// 	const createState = (e) => {
		
// 		const defaultState = {
// 			x: e.clientX,
// 			y: e.clientY,
// 			width: 42,
// 			height: 42,
// 			radius: '100px'
// 		}

// 		const computedState = {}
		
// 		if (onElement != null) {
// 			const { top, left, width, height } = onElement.getBoundingClientRect()
// 			const radius = window.getComputedStyle(onElement).borderTopLeftRadius
			
// 			computedState.x = left + width / 2
// 			computedState.y = top + height / 2
// 			computedState.width = width
// 			computedState.height = height
// 			computedState.radius = radius
// 		}

// 		return {
// 			...defaultState,
// 			...computedState
// 		}

// 	}

// 	document.addEventListener('mousemove', (e) => {
// 		const state = createState(e)
// 		updateProperties(cursor, state)
// 	})

// 	document.querySelectorAll('a, button').forEach((elem) => {
// 		elem.addEventListener('mouseenter', () => onElement = elem)
// 		elem.addEventListener('mouseleave', () => onElement = undefined)
// 	})

// })


// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
  {
      id: 'testimonial-1',
      triggerEl: document.querySelector('#testimonial-1-tab'),
      targetEl: document.querySelector('#testimonial-1')
  },
  {
      id: 'testimonial-2',
      triggerEl: document.querySelector('#testimonial-2-tab'),
      targetEl: document.querySelector('#testimonial-2')
  },
];

// options with default values
const options = {
  defaultTabId: 'settings',
  activeClasses: 'bg-gray-100 dark:bg-gray-700',
  inactiveClasses: 'bg-white dark:bg-gray-900',
  onShow: () => {
      console.log('tab is shown');
  }
};

// const tabs = new Tabs(tabElements, options);js
const btn = document.querySelector('#spinner')
const btnTxt = document.querySelector('#btn-text')



  function myFunction() {
    const firstName = document.getElementById("name")
    const email = document.getElementById("email")
    ;
    if (!firstName.checkValidity() || !email.checkValidity()) {
      btnTxt.innerHTML = "Invalid Input"
    } else {
      btnTxt.innerHTML = "Sending Message"
      btn.classList.toggle('loading')

      setTimeout(function(){
      btn.classList.toggle("loading")
      btn.innerHTML = "<i class='bx bxs-check-circle text-green-100'></i>Message Sent"
        }, 2000)

      setTimeout(function(){
      btnTxt.innerHTML = "Send Message"
        }, 3000)
    } 
  } 

  btn.addEventListener("click", myFunction)



  var swiper3 = new Swiper(".mySwiper-mobile", {
    spaceBetween: 50,
    // direction: "horizontal",
    // pagination: {
    //   el: ".mySwiper-mobile2.swiper-pagination",
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   },
    // },
    allowTouchMove: false,
    watchSlidesProgress: true,
    speed: 0,
    // cssMode: true,
    navigation: {
    nextEl: ".nextBtn2",
    prevEl: ".prevBtn2",
    },
    clickable: false
    });
    var swiper3 = new Swiper(".mySwiper2-mobile", {
    direction: "vertical",
    mousewheel: false,
    spaceBetween: 50,
    followFinger: true,
    autoHeight: true,
    pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    },
    })




