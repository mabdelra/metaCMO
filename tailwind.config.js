/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xxs': '375px',
      // => @media (min-width: 375x) { ... }

      'xs':'478px',
      // => @media (min-width: 478px) { ... }

      'xsm':'575px',
      // => @media (min-width: 478px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1920px',

      'horizontal': '16/9',

    },
    extend: {
      colors:{
        //Dark Gray BG
        "main-bg": "#4a5b63",
  
        // Whiteish BG
        "second-bg": "#d9e5ec",
  
        // "btn": "#009292",
        "btn-dark": "rgba(0,255,255,1)",
  
        "btn-hvr": "rgba(0,255,255,0.7)",
  
        "btn-hvr-light": "rgba(0,255,255,0.4)",
        // "btn-purple": "#D6FFFF",
  
        // "slide-bg": "hsl(202, 33%, 85%)",
        "linkedin": "rgba(0,255,255,1)",
  
        // Text White
        "txt-light": "#F5F5F5",
  
        // Text Gray
        "txt-gray": "#2f2e41",
  
        // Text Light Gray
        "txt-lightgray" : "hsl(0, 0%, 85%);",
  
        // Text Light Gray
        "txt-lightdark" : "hsl(0, 0%, 90%);",
  
        // Text Darker Gray
        "txt-darkgray" : "hsl(240, 8%, 55%)",
  
        // Line Colour
        "line-rule": "hsla(0, 0%, 85%,0.75)",
        "line-rule-light": "hsla(0, 0%, 95%,0.5)",
      },
    },
  },
  plugins: [],
}

// SWIPER JS


// const swiperCarousel = new Swiper(".swiperCarousel1", {
        
//   slidesPerView: "auto",
//   grid: {
//   rows: 1,
//   },
//   grabCursor: true,
//   freeMode: true,
//   spaceBetween: 20,
// //   autoplay: {
// //  delay: 4000
// //   },
//   disableOnInteraction: true,
//   dragSize: 400,
//   pauseOnMouseEnter: true,
//   navigation: {
//   nextEl: ".nextBtn",
//   prevEl: ".prevBtn",
//   },

//   // 