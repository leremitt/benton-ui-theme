import './scss/main.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    //   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)                                       
})

gsap.ticker.lagSmoothing(0)



"use strict";
document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  //const scrubValue = true;
  const scrubValue = 0.5;
  
  let container = document.querySelector('.container')
  
  const scrollBar = gsap.to('.scrollbar', { x: () => { return window.innerWidth - (150 + 20) }, ease: "none" })
  
  ScrollTrigger.create({
      trigger: ".container",
      start: "top top",
      end: () => (container.scrollWidth - window.innerWidth),
      pin: true,
      anticipatePin: 1,
      scrub: scrubValue,
      animation: scrollBar,
      invalidateOnRefresh: true,
  })
  
  
  
  let thumbNails = gsap.utils.toArray(".thumbnail");
  
  thumbNails.forEach((thumb, i) => {
   
    if (thumb.classList.contains('fakePin')) {
                  
      function prevAll(element) {
        var result = [];
  
        while (element = element.previousElementSibling)
            result.push(element);
        return result;
      }    
      
      // console.log(prevAll(thumb))
      
      var totalWidthToMove;
      
      function getTotalWidthToMove() {
          
        totalWidthToMove = 0;
        
        prevAll(thumb).forEach((thumbBefore, i) => {
  
          let style = thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);      
          let marginRight = parseInt(style.marginRight);
  
          totalWidthToMove += thumbBefore.offsetWidth + marginRight;
  
        });    
  
        return totalWidthToMove;
        
      }
      //getTotalWidthToMove();    
      //console.log(totalWidthToMove)
      
      gsap.to(thumb, {
        x: () => { return - getTotalWidthToMove() },
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          start: 'top top',
          scrub: scrubValue,
          invalidateOnRefresh: true,
          end: () => "+=" + getTotalWidthToMove(),
        }
      });
      
    }
    else {
      
      gsap.to(thumb, {
        x: () => { return - (container.scrollWidth) },
        ease: "none",
        scrollTrigger: {
          trigger: ".wrapper",
          start: 'top top',
          scrub: scrubValue,
          invalidateOnRefresh: true,
          end: () => "+=" + (container.scrollWidth),
        }
      });
      
    }
      
    //console.log(thumb.offsetWidth)
    
  });
  
  
  
  
  /* Main navigation */
  const panelsSection = document.querySelector(".container");
  const anchor  = document.querySelectorAll(".anchor")
 anchor && document.querySelectorAll(".anchor").forEach(anchor => {
  
    anchor.addEventListener("click", function(e) {
      
        e.preventDefault();
  
        const targetElem = document.querySelector(e.target.getAttribute("href"));
      
        const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft - 10; // 10 being the margin - probably better to get it like it was done above
  
        gsap.to(window, {
          scrollTo: {
            y: containerOffset,
            autoKill: false
          },
          duration: 1
        });
      
    });
    
  });
  
});
