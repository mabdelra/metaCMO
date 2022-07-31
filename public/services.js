
///////////////////////////////////////////////////////////
// SwiperJS Slides
/////////////////////////////////////////////////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    observer: true,
    spaceBetween: 15,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: "#nextBtn",
      prevEl: "#prevBtn",
    },
    cursor: "none",
    grabCursor: true,
    // autoplay: {
    // delay: 4000
    // },
    disableOnInteraction: true,
    dragSize: 200,
    pauseOnMouseEnter: true,
    history: {
      key: "slide",
    },
  });

const text2 = document.querySelector('#text-dec2')
const text1 = document.querySelector('#text-dec1')


const track = document.getElementById('slide-track');
const slideImage = document.getElementById('slideImage');
const slideTitle = document.getElementById('slideTitle');
const slideText = document.getElementById('slideText');


// SERVICES BUTTONS

// Initialising Buttons
const clevel = document.querySelector('#clevel')
const socials = document.querySelector('#socials')
const content = document.querySelector('#content')
const brand = document.querySelector('#brand')
const project = document.querySelector('#project')
const ads = document.querySelector('#ads')
// Used as a step
let i = 1;

const buttonList = document.getElementById('buttonList').children
console.log(buttonList) 

const mainSlide = document.getElementById('main-slide');
const slide2 = document.getElementById('slide-2')




const grid1Content = () => {
    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "CMO"
    mainSlide.querySelector('#slideText').innerHTML = "If you think that a Chief Marketing Officer would be an asset to your business, how does a whole team working in unison work for you? At MetaCMO, we offer professional management of your brand, development of your product, as well as marketing communications across all channels."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/illustrations/cmo.svg");
    // Text Change
    /////////////////////////////////////
    
        /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
        // Creating extra slide
    // Changing content of second slide
    slide2.querySelector('#slideTitle').innerHTML = "CTO"
    slide2.querySelector('#slideText').innerHTML = "Our CTO team will formulate a vision of how technology can be used as an asset in your organisation. We advocate effective governance and generate value for your enterprise. With strength in product development, we use technology to grow a deeper connection with your customers; developing your brand at a technological level."
    slide2.querySelector('#slideImage').setAttribute("src", "/illustrations/cto.svg");
    // Adding it to the list
    track.appendChild(slide2)
    swiper.setProgress(0, 300)

        /////////////////////////////////////
}


const grid2Content = () => {

    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "Commmunity Engagement"
    mainSlide.querySelector('#slideText').innerHTML = "Focusing on your community is crucial to developing your brand. With our trusted experts, we lead engagement and provide inertia to discussion around what really matters to your consumers."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/illustrations/community.svg");
    // Text Change
    /////////////////////////////////////


    /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    slide2.querySelector('#slideTitle').innerHTML = "Telegram Management"
    slide2.querySelector('#slideText').innerHTML = "As the gatekeepers to your Telegram account, we will define and manage the culture around your business by stimulating conversation to those who want to join your exclusive community."
    slide2.querySelector('#slideImage').setAttribute("src", "/illustrations/groupchat.svg");
    // Adding it to the list
    track.appendChild(slide2)
    // Text Change
    /////////////////////////////////////

   ///////////////////////////////////
    // ******************************* //
    // Slide 3
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    let slide3 = slide2.cloneNode(true)
    slide3.removeAttribute("id");
    slide3.id = "slide-3"
    slide3.querySelector('#slideTitle').innerHTML = "Discord Management"
    slide3.querySelector('#slideText').innerHTML = "We assist your community by answering questions and engaging with them to discover what makes your consumers tick. We will plan events and explore new partnerships to help enhance your reach and engagement."
    slide3.querySelector('#slideImage').setAttribute("src", "/illustrations/discord.svg");
    // Adding it to the list
    track.appendChild(slide3)
    // Text Change
    /////////////////////////////////////

    /////////////////////////////////////
    // // ******************************* //
    // // Slide 4
    // // ******************************* //
    // // Changing content of second slide
    //  // Creating extra slide
    let slide4 = slide2.cloneNode(true)
    slide4.removeAttribute("id");
    slide4.id = "slide-4"
    slide4.querySelector('#slideTitle').innerHTML = "Twitter"
    slide4.querySelector('#slideText').innerHTML = "With over 353 million users, we will cut through the crowd to deliver brand recognition, improved customer service and engagement and increase your community and your sales."
    slide4.querySelector('#slideImage').setAttribute("src", "/illustrations/twitter.svg");
    // // Adding it to the list
    track.appendChild(slide4)
    // // Text Change
    // /////////////////////////////////////

    /////////////////////////////////////
    // // ******************************* //
    // // Slide 5
    // // ******************************* //
    // // Changing content of second slide
    //  // Creating extra slide
    let slide5 = slide2.cloneNode(true)
    slide5.removeAttribute("id");
    slide5.id = "slide-5"
    slide5.querySelector('#slideTitle').innerHTML = "Instagram"
    slide5.querySelector('#slideText').innerHTML = "Instagram marketing is powerful. It only takes one image...one post to reach the 1 billion users on the platform. Our professionals will extract every ounce of potential from the platform that can help your business go viral overnight."
    slide5.querySelector('#slideImage').setAttribute("src", "/illustrations/instagram.svg");
    // // Adding it to the list
    track.appendChild(slide5)
    // // Text Change
    // /////////////////////////////////////

    /////////////////////////////////////
    // // ******************************* //
    // // Slide 6
    // // ******************************* //
    // // Changing content of second slide
    //  // Creating extra slide
    let slide6 = slide2.cloneNode(true)
    slide6.removeAttribute("id");
    slide6.id = "slide-6"
    slide6.querySelector('#slideTitle').innerHTML = "Facebook"
    slide6.querySelector('#slideText').innerHTML = "Our team builds long-term relationships with insightful content that drives community engagement sky high. We will leverage the platform that has billions of users to target your customers. Our expertise will deliver more followers and most importantly, sales."
    slide6.querySelector('#slideImage').setAttribute("src", "/illustrations/facebook.svg");
    // // Adding it to the list
    track.appendChild(slide6)
    // // Text Change
    // /////////////////////////////////////

    /////////////////////////////////////
    // // ******************************* //
    // // Slide 7
    // // ******************************* //
    // // Changing content of second slide
    //  // Creating extra slide
    let slide7 = slide2.cloneNode(true)
    slide7.removeAttribute("id");
    slide7.id = "slide-7"
    slide7.querySelector('#slideTitle').innerHTML = "Reddit"
    slide7.querySelector('#slideText').innerHTML = "See your threads rise to the top with dedicated and insightful media designed to attract your growing network. Get the upvotes you need to gain relevant traffic and interest around your latest activity."
    slide7.querySelector('#slideImage').setAttribute("src", "/illustrations/reddit.svg");
    // // Adding it to the list
    track.appendChild(slide7)
    // // Text Change
    // /////////////////////////////////////
    /////////////////////////////////////
    // // ******************************* //
    // // Slide 8
    // // ******************************* //
    // // Changing content of second slide
    //  // Creating extra slide
    let slide8 = slide2.cloneNode(true)
    slide8.removeAttribute("id");
    slide8.id = "slide-8"
    slide8.querySelector('#slideTitle').innerHTML = "LinkedIn"
    slide8.querySelector('#slideText').innerHTML = "We maximise your LinkedIn marketing success by activating thought leadership and connection, as well as strategically evolving customer engagement with innovative campaign planning for greater brand awareness and adoption."
    slide8.querySelector('#slideImage').setAttribute("src", "/illustrations/linkedin.svg");
    // // Adding it to the list
    track.appendChild(slide8)
    swiper.setProgress(0, 300)
    // // Text Change
    // /////////////////////////////////////
}








const grid3Content = () => {
        
    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "Content Plan & Calendar"
    mainSlide.querySelector('#slideText').innerHTML = "We develop careful planning and strategy around the release of your content to coincide with your brand's development; ensuring your brand stays unique, insightful, and powerful."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/illustrations/calendar.svg");
    // Text Change
    /////////////////////////////////////
    
     /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    slide2.querySelector('#slideTitle').innerHTML = "Creative Content"
    slide2.querySelector('#slideText').innerHTML = "Decisive content produced by our in-house copywriters aligns your brand across all channels, for strategic growth and consistency across your dynamic brand."
    slide2.querySelector('#slideImage').setAttribute("src", "/illustrations/creative.svg");
    // Adding it to the list
    track.appendChild(slide2)

     /////////////////////////////////////
     /////////////////////////////////////
    // ******************************* //
    // Slide 3
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    let slide3 = slide2.cloneNode(true)
    slide3.removeAttribute("id");
    slide3.id = "slide-3"
    slide3.querySelector('#slideTitle').innerHTML = "Video Creation & Production"
    slide3.querySelector('#slideText').innerHTML = "We expertly deliver wide-reaching brand awareness with videos that express the personality and values of your brand through engaging content that packs a punch."
    slide3.querySelector('#slideImage').setAttribute("src", "/illustrations/video.svg");
    // Adding it to the list
    track.appendChild(slide3)
    swiper.setProgress(0, 300)

     /////////////////////////////////////
}





const grid4Content = () => {
        
    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "SEO"
    mainSlide.querySelector('#slideText').innerHTML = "Using the latest techniques, we deliver best in class technical SEO and off-page link building that helps reduce your overall spend, facilitates more traffic and meaningful conversions for higher website ranking."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/illustrations/SEO.svg");
    // Text Change
    /////////////////////////////////////
    
     /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    slide2.querySelector('#slideTitle').innerHTML = "PR"
    slide2.querySelector('#slideText').innerHTML = "Boost online sales and conversions with our Digital PR services that connect you with the platforms that boost your brand’s success. Our specialists manage your portfolio and develop its potential and authority in the market."
    slide2.querySelector('#slideImage').setAttribute("src", "/illustrations/PR.svg");
    // Adding it to the list
    track.appendChild(slide2)


     /////////////////////////////////////
     /////////////////////////////////////
    // ******************************* //
    // Slide 3
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    let slide3 = slide2.cloneNode(true)
    slide3.removeAttribute("id");
    slide3.id = "slide-3"
    slide3.querySelector('#slideTitle').innerHTML = "OOH Marketing"
    slide3.querySelector('#slideText').innerHTML = "Our Out-of-Home Marketing is designed to target your consumers with our branded content and the clever placement of our tailored OOH ads. "
    slide3.querySelector('#slideImage').setAttribute("src", "/illustrations/billboard.svg");
    // Adding it to the list
    track.appendChild(slide3)
    swiper.setProgress(0, 300)
    /////////////////////////////////////

     /////////////////////////////////////
     /////////////////////////////////////
    // ******************************* //
    // Slide 4
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    let slide4 = slide2.cloneNode(true)
    slide4.removeAttribute("id");
    slide4.id = "slide-4"
    slide4.querySelector('#slideTitle').innerHTML = "Digital Marketing"
    slide4.querySelector('#slideText').innerHTML = "MetaCMO paves the way for your brand’s success with digital strategy, launching your business into the world by developing your businesses’ authenticity across multiple platforms. "
    slide4.querySelector('#slideImage').setAttribute("src", "/illustrations/marketing.svg");
    // Adding it to the list
    track.appendChild(slide4)
    swiper.setProgress(0, 300)
    /////////////////////////////////////
}


const grid5Content = () => {
        
    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "Whitepaper & Litepaper Writing"
    mainSlide.querySelector('#slideText').innerHTML = "Give investors the information they need to make valuable decisions with carefully planned and distributed papers written by our experienced team."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/illustrations/whitepaper.svg");
    // Text Change
    /////////////////////////////////////
    
     /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    slide2.querySelector('#slideTitle').innerHTML = "Blockchain & Tokenomics Production"
    slide2.querySelector('#slideText').innerHTML = "Our team of experts design and produce the blockchain and tokenomics that are crucial to get your project moving."
    slide2.querySelector('#slideImage').setAttribute("src", "/illustrations/blockchain.svg");
    // Adding it to the list
    track.appendChild(slide2)
    swiper.setProgress(0, 300)
}


const grid6Content = () => {
        
    // ******************************* //
    // Slide 1
    // ******************************* //
    // Changing content of second slide
    mainSlide.querySelector('#slideTitle').innerHTML = "Twitter Ads"
    mainSlide.querySelector('#slideText').innerHTML = "Define your business on a dynamic platform where your real-world impact gets you noticed. We will create insightful ad content that targets your desired audience and that grows your community."
    mainSlide.querySelector('#slideImage').setAttribute("src", "/svgs/Twitter Ads.svg");


    // Text Change
    /////////////////////////////////////
    
     /////////////////////////////////////
    // ******************************* //
    // Slide 2
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    slide2.querySelector('#slideTitle').innerHTML = "Facebook Ads"
    slide2.querySelector('#slideText').innerHTML = "Facebook ads provide a substantial return of investment. We will target your customer base and the market to engage audiences with campaigns that drive serious results."
    slide2.querySelector('#slideImage').setAttribute("src", "/svgs/metaads.svg");

    // Adding it to the list
    track.appendChild(slide2)


     /////////////////////////////////////
    // ******************************* //
    // Slide 3
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    let slide3 = slide2.cloneNode(true)
    slide3.removeAttribute("id");
    slide3.id = "slide-3"
    slide3.querySelector('#slideTitle').innerHTML = "Instagram Ads"
    slide3.querySelector('#slideText').innerHTML = "75% of Instagram users act after viewing an Instagram ad. We lead the way to drive community engagement and profit for your business."
    slide3.querySelector('#slideImage').setAttribute("src", "/svgs/instagramads.svg");
    // Adding it to the list
    track.appendChild(slide3)

     /////////////////////////////////////
    // ******************************* //
    // Slide 4
    // ******************************* //
    // Changing content of second slide
     // Creating extra slide
    // Changing content of second slide
    let slide4 = slide2.cloneNode(true)
    slide4.removeAttribute("id");
    slide4.id = "slide-4"
    slide4.querySelector('#slideTitle').innerHTML = "Google AdWords"
    slide4.querySelector('#slideText').innerHTML = "With our carefully targeted Adwords, we will leverage the Google Search platform with intuitive bid adjustments to cleverly target your audience, grow engagement and be first past the post for visibility against your competitors."
    slide4.querySelector('#slideImage').setAttribute("src","/svgs/g-ads.svg");
    // Adding it to the list
    track.appendChild(slide4)

    let slide5 = slide2.cloneNode(true)
    slide5.removeAttribute("id");
    slide5.id = "slide-5"


    // slide5.insertBefore(document.createElement("p"), container.firstChild);

    slide5.querySelector('#slideTitle').innerHTML = "LinkedIn Ads"
    slide5.querySelector('#slideText').innerHTML = "Ads on this platform have the potential to reach 13% of the global population. Our team will define your business innovatively in personalised ads for your audience."
    slide5.querySelector('#slideImage').setAttribute("src","/svgs/linkedinads.svg");
    // Adding it to the list
    track.appendChild(slide5)
    swiper.setProgress(0, 300)
}


const slideRemove = () =>{
    if(document.querySelector('#slide-3')){track.removeChild(document.querySelector('#slide-3'))}
    if(document.querySelector('#slide-4')){track.removeChild(document.querySelector('#slide-4'))}
    if(document.querySelector('#slide-5')){track.removeChild(document.querySelector('#slide-5'))}
    if(document.querySelector('#slide-6')){track.removeChild(document.querySelector('#slide-6'))}
    if(document.querySelector('#slide-7')){track.removeChild(document.querySelector('#slide-7'))}
    if(document.querySelector('#slide-8')){track.removeChild(document.querySelector('#slide-8'))}
}



clevel.addEventListener("click", () => {
    for(let b = 0; b <= 6;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
    }

    slideRemove()
    text2.innerHTML = "C-SUITE"
    text1.innerHTML = "C-SUITE"

    clevel.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid1Content()
    swiper.setProgress(0, 300)
    swiper.update()
})

socials.addEventListener("click", () => {
    for(let b = 0; b <= 5;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
    }

    slideRemove()
    text2.innerHTML = "SOCIALS"
    text1.innerHTML = "SOCIALS"

    socials.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid2Content()
    swiper.setProgress(0, 300)
    swiper.update()
})

content.addEventListener("click", () => {

    for(let b = 0; b <= 5;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
    }

    slideRemove()
    text2.innerHTML = "CONTENT"
    text1.innerHTML = "CONTENT"
    
    content.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid3Content()
    swiper.setProgress(0, 300)
    swiper.update()
})

brand.addEventListener("click", () => {
    for(let b = 0; b <= 5;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
      }

    text2.innerHTML = "BRAND AWARENESS"
    text1.innerHTML = "BRAND AWARENESS"

    slideRemove()

    brand.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid4Content()
    swiper.setProgress(0, 300)
    swiper.update()
})

project.addEventListener("click", () => {

    for(let b = 0; b <= 5;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
      }

      text2.innerHTML = "PROJECT DEVELOPMENT"
      text1.innerHTML = "PROJECT DEVELOPMENT"

    slideRemove()

    project.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid5Content()
    swiper.setProgress(0, 300)
    swiper.update()
})

ads.addEventListener("click", () => {

    for(let b = 0; b <= 5;  b++){
        buttonList[b].classList.remove('btn-primary-selected')
        buttonList[b].classList.add('btn-secondary-selected')
        console.log(buttonList[b].classList)
        continue
      }

      text2.innerHTML = "PAID-ADS"
      text1.innerHTML = "PAID-ADS"

    slideRemove()

    ads.classList.replace('btn-secondary-selected', 'btn-primary-selected')
    grid6Content()

    
    // mainSlide.querySelector('#mainBody1').innerHTML = "<div id='twitter' class='justify-center items-center h-[20%] gradient-txt text-5xl text-transparent'><i class='bx bxl-twitter'></i></div>" + (mainSlide.querySelector('#mainBody1').innerHTML);

    // slide2.querySelector('#mainBody2').innerHTML = "<div id='twitter' class='justify-center items-center h-[20%] gradient-txt text-5xl text-transparent'><i class='bx bxl-twitter'></i></div>" + (slide2.querySelector('#mainBody2').innerHTML);

    // if(document.querySelector('#slide-3')){
    //     let slide3 = document.querySelector('#slide-3'); 
    //     slide3.querySelector('#mainBody2').innerHTML = "<div id='twitter' class='justify-center items-center h-[20%] gradient-txt text-5xl text-transparent'><i class='bx bxl-twitter'></i></div>" + (slide3.querySelector('#mainBody2').innerHTML);
    // }


    swiper.setProgress(0, .001)
    swiper.update()
})




const btnSpin = document.getElementById('spinner')

// btnSpin.addEventListener('click', () => {
//   btnSpin.add('loading')
// })




/////////////////////////////////////////////////////////
// C-LEVEL SLIDES
/////////////////////////////////////////////////////////

// Slide 2 ***************************


// <section id="services" class="bg-main-bg py-16 md:hidden relative">
//         <!-- TITLE -->
//         <div class="flex flex-col space-y-5">
        
//             <div class="row justify-content-center text-center max-w-full xs:max-w-[450px] md:max-w-full mx-auto">
//                 <div class="mb-12 md:mb-12">
//                     <div class="header-section flex flex-col md:items-center items-center text-center md:text-center justify-center gap-3">
//                         <h3 id="ourstory" class="text-sm text-transparent gradient-txt underline-left">A BRIEF LOOK INTO</h3>
//                         <h2 class="md:text-6xl font-extrabold md:text-center sm:text-6xl xs:text-5xl text-5xl text-txt-light">Our Services</h2>
//                     </div>
//                 </div>
      
//               <div class="mx-auto px-5 mb-0">
//                   <div class="flex justify-between md:justify-center items-center mt-7 md:max-w-full max-w-[400px] mx-auto ">
//                       <div id="buttonList" class="flex gap-3 list"><button data-history="1" id="" class="btn-primary-selected  hover:-translate-y-1 font-medium md:text-base text-sm">C-level</button><button onclick="" data-history="2" id="community" class="btn-secondary-selected hover:-translate-y-1 community md:block hidden socials font-medium md:text-base text-sm">Socials</button><button data-history="3" id="content" class="btn-secondary-selected hover:-translate-y-1 md:block hidden content font-medium md:text-base text-sm">Content</button><button data-history="4" id="brand" class="btn-secondary-selected md:block hidden hover:-translate-y-1 brand font-medium md:text-base text-sm">Brand Awareness</button><button data-history="5" id="project" class="btn-secondary-selected md:block hidden hover:-translate-y-1 project font-medium md:text-base text-sm">Project Development</button><button data-history="6" id="ads" class="btn-secondary-selected hover:-translate-y-1 md:block hidden ads font-medium md:text-base text-sm">Paid Ads</button></div>
      
//                       <div class="flex space-x-2 h-full md:max-w-full md:hidden ">
      
//                       <div class="w-full h-full">
//                           <button type="button" id="prevBtn2"
//                           class="prevBtn2 btn-primary-round  w-fit flex items-center justify-center aspect-square text-center  "><i class='my-auto text-2xl w-fit bx bx-chevron-left'></i></button>
//                       </div>
                      
//                       <div class="w-full h-full">
//                           <button id="nextBtn2" type="button" 
//                               class="nextBtn2 btn-primary-round w-fit flex items-center justify-center aspect-square text-center "><i class='my-auto text-2xl w-fit bx bx-chevron-right'></i></button>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         <!-- </div> -->
      
//       <!-- ////////////////////// -->
//       <!-- Mobile Screen Services -->
      
          
//           <article class="bg-main-bg relative w-full mx-auto md:hidden px-5">
      
//               <div id="gridSmall" class="mt-3 h-full rounded-3xl  max-w-[400px] ">
              
//               <div class="h-full rounded-3xl wrapper-mobile md:hidden relative">
//                 <div class="swiper mySwiper-mobile rounded-3xl">
//                   <div class="swiper-wrapper rounded-3xl">
              
//               <!-- Section 1 -->
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
//               <!-- Grid 1 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2   bg-second-bg  w-full flex rounded-3xl h-full p-6">
//                       <div class="flex md:flex-row flex-col-reverse gap-8">
//                           <div class="h-full flex flex-col items-start justify-evenly gap-3 md:w-2/3">
                              
//                               <div class="flex flex-col items-start gap-5 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">CMO</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">If you think that a Chief Marketing Officer would be an asset to your business, how does a whole team working in unison work for you? At MetaCMO, we offer professional management of your brand, development of your product, as well as marketing communications across all channels.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/cmo.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid 2 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/CTO.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3 id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">CTO</h3>
//                               <p id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Our CTO team will formulate a vision of how technology can be used as an asset in your organisation. We advocate effective governance and generate value for your enterprise. With strength in product development, we use technology to grow a deeper connection with your customers; developing your brand at a technological level.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                     </div>
//                   </div>
//               </div>
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
              
//               <!-- ///////////// -->
//               <!-- Section - 2 -->
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
//               <!-- ///////////// -->
//               <!-- COMMUNITY ENGAGEMENT -->
//               <!-- Grid-1 S2 -->
//               <div class="swiper-slide rounded-3xl">
//               <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//               <div class="flex md:flex-row flex-col-reverse gap-8">
//                   <div class="h-full flex flex-col items-start justify-evenly gap-3 md:w-2/3">
                      
//                       <div class="flex flex-col items-start gap-5 text-start">
//                           <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">Commmunity Engagement</h3>
//                           <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">Focusing on your community is crucial to developing your brand. With our trusted experts, we lead engagement and provide inertia to discussion around what really matters to your consumers.</p>
//                           <div class="flex justify-center items-center">
//                               <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                           </div>
//                       </div>
//                   </div>
//                   <div class="md:w-1/3 flex justify-center items-center">
//                       <img src="/illustrations/community.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                   </div>
//               </div>
//               </div>
//               </div>
              
//               <!-- Grid-2 S2 -->
//               <!-- ////////////// -->
//               <!-- TELEGRAM -->
//               <div class="swiper-slide rounded-3xl">
//               <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//               <div class="flex flex-row gap-8 h-full">
//                   <div class="h-full flex flex-col justify-center items-start text-start gap-8">
      
//                       <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                           <img src="/illustrations/groupchat.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                       </div>
                      
//                       <div class="flex flex-col gap-8 items-start text-start">
//                           <h3 id="smallGrid3Title" class="text-2xl font-semibold text-gray-800 data">Telegram Management</h3>
//                           <p id="smallGrid3Text" class="sm:text-sm text-xs text-gray-500">As the gatekeepers to your Telegram account, we will define and manage the culture around your business by stimulating conversation to those who want to join your exclusive community.</p>
//                           <div class="flex justify-center items-center">
//                               <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               </div>
//               </div>
              
//               <!-- Grid-3 S2 -->
//               <!-- ///////////////// -->
//               <!-- DISCORD -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center max-w-[200px]">
//                               <img src="/illustrations/discord.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Discord Management </h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">We assist your community by answering questions and engaging with them to discover what makes your consumers tick. We will plan events and explore new partnerships to help enhance your reach and engagement.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-4 S2 -->
//               <!-- /////////////////// -->
//               <!-- TWITTER -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/twitter.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Twitter</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">With over 353 million users, we will cut through the crowd to deliver brand recognition, improved customer service and engagement and increase your community and your sales.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-5 S2 -->
//               <!-- /////////////////// -->
//               <!-- INSTAGRAM -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/instagram.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Instagram</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">Instagram marketing is powerful. It only takes one image...one post to reach the 1 billion users on the platform. Our professionals will extract every ounce of potential from the platform that can help your business go viral overnight.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
              
//               <!-- Grid-6 S2 -->
//               <!-- /////////////////// -->
//               <!-- FACEBOOK -->
              
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/facebook.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Facebook</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">Our team builds long-term relationships with insightful content that drives community engagement sky high. We will leverage the platform that has billions of users to target your customers. Our expertise will deliver more followers and most importantly, sales.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-7 S2 -->
//               <!-- /////////////////// -->
//               <!-- REDDIT-->
              
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/reddit.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Reddit</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">See your threads rise to the top with dedicated and insightful media designed to attract your growing network. Get the upvotes you need to gain relevant traffic and interest around your latest activity.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-8 S2 -->
//               <!-- /////////////////// -->
//               <!-- LINKEDIN -->
              
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/linkedin.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">LinkedIn</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">We maximise your LinkedIn marketing success by activating thought leadership and connection, as well as strategically evolving customer engagement with innovative campaign planning for greater brand awareness and adoption.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
              
//               <!-- SECTION 3 -->
              
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
//               <!-- ///////////// -->
//               <!-- CALENDAR -->
//               <!-- Grid-1 S3 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/calendar.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Content Plan & Calendar</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">We develop careful planning and strategy around the release of your content to coincide with your brand's development; ensuring your brand stays unique, insightful, and powerful.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-2 S3 -->
//               <!-- ////////////// -->
//               <!-- CREATIVE CONTENT -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/creative.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Creative Content</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">Decisive content produced by our in-house copywriters aligns your brand across all channels, for strategic growth and consistency across your dynamic brand.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-3 S3 -->
//               <!-- ///////////////// -->
//               <!-- VIDEO CREATION & PRODUCTION -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/video.svg" class=" xs:max-w-[200px] md:max-w-[100%] max-w-[100px]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Video Creation & Production</h3>
//                               <p  id="smallGrid2Text"  class="sm:text-sm text-xs text-gray-500">We expertly deliver wide-reaching brand awareness with videos that express the personality and values of your brand through engaging content that packs a punch.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>        
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
              
//               <!-- SECTION 4 -->
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
//               <!-- ///////////// -->
//               <!-- PR -->
//               <!-- Grid-1 S4 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center max-w-[200px]">
//                               <img src="/illustrations/PR.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title" class="text-2xl font-semibold text-gray-800">PR</h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Boost online sales and conversions with our Digital PR services that connect you with the platforms that boost your brand’s success. Our specialists manage your portfolio and develop its potential and authority in the market.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-2 S4 -->
//               <!-- ////////////// -->
//               <!-- ADVERTISEMENTS -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/SEO.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">SEO</h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Using the latest techniques, we deliver best in class technical SEO and off-page link building that helps reduce your overall spend, facilitates more traffic and meaningful conversions for higher website ranking.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-3 S4 -->
//               <!-- ///////////////// -->
//               <!-- MARKETING -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center  max-w-[200px]">
//                               <img src="/illustrations/marketing.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start ">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Digital Marketing</h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">MetaCMO paves the way for your brand’s success with digital strategy, launching your business into the world by developing your businesses’ authenticity across multiple platforms. </p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-4 S4 -->
//               <!-- /////////////////// -->
//               <!-- BRANDING & COMMUNITY -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/billboard.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">OOH Marketing</h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Our Out-of-Home Marketing is designed to target your consumers with our branded content and the clever placement of our tailored OOH ads. </p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>         
              
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
//               <!-- ///////////// -->
//               <!-- SECTION 5 -->
              
//               <!-- ///////////// -->
//               <!-- Whitepaper & Litepaper Writing -->
//               <!-- Grid-1 S5 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center max-w-[200px]">
//                               <img src="/illustrations/whitepaper.svg" class="scale-75 xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title" class="text-2xl font-semibold text-gray-800">Whitepaper & Litepaper Writing</h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Give investors the information they need to make valuable decisions with carefully planned and distributed papers written by our experienced team.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-2 S5 -->
//               <!-- ////////////// -->
//               <!-- Blockchain & Tokenomics Production  -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-8 h-full">
//                       <div class="h-full flex flex-col justify-center items-center gap-8">
                      
//                           <div class="md:w-1/3 flex justify-center items-center">
//                               <img src="/illustrations/blockchain.svg" class=" xs:max-w-[250px] md:max-w-[100%] max-w-[100%]" alt="">
//                           </div>
                          
//                           <div class="flex flex-col gap-8 items-start text-start">
//                               <h3  id="smallGrid2Title"   class="text-2xl font-semibold text-gray-800">Blockchain & Tokenomics Production </h3>
//                               <p  id="smallGrid2Text" class="sm:text-sm text-xs text-gray-500">Our team of experts design and produce the blockchain and tokenomics that are crucial to get your project moving.</p>
//                               <div class="flex justify-center items-center">
//                                   <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//                       </div>
//               </div>
              
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
              
//               <!-- SECTION 6 -->
//               <div class="swiper-slide">
//               <div class="swiper mySwiper2-mobile swiper-v rounded-3xl">
//               <div class="swiper-wrapper rounded-3xl">
              
              
//               <!-- ///////////// -->
//               <!-- Twitter Ads-->
//               <!-- Grid-1 S6 -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-6">
//                           <div class="h-full flex flex-col items-start justify-center gap-6 md:w-2/3">
//                               <div class="flex items-center justify-center text-5xl text-transparent gradient">
//                                   <i class='bx bxl-twitter'></i>
//                               </div>
                              
//                               <div class="flex flex-col items-start gap-8 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">Twitter Ads</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">Define your business on a dynamic platform where your real-world impact gets you noticed. We will create insightful ad content that targets your desired audience and that grows your community.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-2 S6 -->
//               <!-- ////////////// -->
//               <!-- FACEBOOK ADS -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-6">
      
//                           <div class="h-full flex flex-col items-start justify-center gap-6 md:w-2/3">
//                               <div class="flex items-center justify-center text-5xl text-transparent gradient">
//                                   <i class='bx bxl-facebook-circle'></i>
//                               </div>
                              
//                               <div class="flex flex-col items-start gap-8 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">Facebook Ads</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">Facebook ads provide a substantial return of investment. We will target your customer base and the market to engage audiences with campaigns that drive serious results.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-3 S6 -->
//               <!-- ///////////////// -->
//               <!-- Instagram Ads -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-6">
      
//                           <div class="h-full flex flex-col items-start justify-center gap-6 md:w-2/3">
//                               <div class="flex items-center justify-center text-5xl text-transparent gradient">
//                                   <i class='bx bxl-instagram'></i>
//                               </div>
                              
//                               <div class="flex flex-col items-start gap-8 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">Instagram Ads</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">75% of Instagram users act after viewing an Instagram ad. We lead the way to drive community engagement and profit for your business.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                       </div>
//               </div>
              
//               <!-- Grid-4 S6 -->
//               <!-- /////////////////// -->
//               <!-- BRANDING & COMMUNITY -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-6">
      
//                           <div class="h-full flex flex-col items-start justify-center gap-6 md:w-2/3">
//                               <div class="flex items-center justify-center text-5xl text-transparent gradient">
//                                   <i class='bx bxl-google'></i>
//                               </div>
                              
//                               <div class="flex flex-col items-start gap-8 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">Google AdWords</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">With our carefully targeted Adwords, we will leverage the Google Search platform with intuitive bid adjustments to cleverly target your audience, grow engagement and be first past the post for visibility against your competitors.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
              
//               <!-- Grid-5 S6 -->
//               <!-- /////////////////// -->
//               <!-- WEBSITE DEVELOPMENT -->
//               <div class="swiper-slide rounded-3xl">
//                   <div class=" md:col-span-4 col-span-6 md:col-start-1 md:row-start-1 md:row-span-1 row-span-2 bg-second-bg  w-full flex rounded-3xl h-full p-10">
//                       <div class="flex md:flex-row flex-col gap-6">
      
//                           <div class="h-full flex flex-col items-start justify-center gap-6 md:w-2/3">
//                               <div class="flex items-center justify-center text-5xl text-transparent gradient">
//                                   <i class='bx bxl-linkedin'></i>
//                               </div>
                              
//                               <div class="flex flex-col items-start gap-8 text-start">
//                                   <h3 id="smallGrid1Title" class="text-2xl font-semibold text-gray-800 data">LinkedIn Ads</h3>
//                                   <p id="smallGrid1Text" class="sm:text-sm text-xs md:max-w-[45ch] lg:max-w-[60ch] text-gray-500">Ads on this platform have the potential to reach 13% of the global population. Our team will define your business innovatively in personalised ads for your audience.</p>
//                                   <div class="flex justify-center items-center">
//                                       <a href="" class="btn-1  text-white text-sm">Learn More</a>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
              
              
//               </div>
//               <div class="swiper-pagination"></div>
//               </div>
//               </div>
              
//               </div>
//               <div class="mySwiper-mobile2 swiper-pagination"></div>
//               </div>
//               </div>
//               </article>
//             </div>
//         </div>
//       </section>