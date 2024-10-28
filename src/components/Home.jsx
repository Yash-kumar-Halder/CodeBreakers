import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    let homeTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pageTwo",
        start: "top 90%",
        end: "bottom 0%",
        scrub: true,
      }
    });
    homeTl.to(".hlHeading", {
      x: -600,
      scale:0,
      opacity: 0,
      scrollTrigger: {
        stagger: 0.3,
        scrub: true,
        start: "top -10%",
        end: "top -70%",
      }
    }, "homeFirst")

    homeTl.to(".hlPickup", {
      x: -600,
      opacity: 0,
      scale:0,
      scrollTrigger: {
        stagger: 0.3,
        scrub: true,
        start: "top -10%",
        end: "top -70%",
      }
    }, "homeFirst")

    homeTl.to(".hlProjectBtn", {
      x: -200,
      opacity: 0,
      delay:0,
      scrollTrigger: {
        scrub: true,
        start: "top -10%",
        end: "top -40%",
      }
    }, "homeFirst")

    homeTl.to(".row1", {
      x: "-50%",
    }, "homeFirst")
    homeTl.to(".row2", {
      x: "30%",
    }, "homeFirst")
    homeTl.to(".row3", {
      x: "-30%",
    }, "homeFirst")
  })

  return (
    <>
      <div data-scroll data-scroll-speed="-0.8" className="home">
        <div className="heroLeft">
          <div className="hlHeading">
            <span>T</span>
            <span>h</span>
            <span>e</span>
            <br />
            <span>C</span>
            <span>o</span>
            <span>d</span>
            <span>e</span>
            <span>B</span>
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>k</span>
            <span>e</span>
            <span>r</span>
            <span>s</span>
          </div>
          <div className="hlPickup">Transform your ideas into reality with cutting-edge, design and devolopment that
            drives success forward.</div>
          <button href="footer" className="hlProjectBtn magnet">Explore</button>
        </div>
        <div className="heroRight">
          {/* <video autoPlay loop muted className='homeVideo' src="../videos/aboutVideo.mp4"></video> */}
        </div>
      </div>

    </>

  )
}

export default Home