import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function About() {

  gsap.registerPlugin();
  let abouTl1 = gsap.timeline();

  useGSAP(() => {
    abouTl1.to(".aboutusLetfSection", {
      scrollTrigger: {
        trigger: ".aboutusWraper",
        start: "top -3%",
        end:"bottom 10%",
        duration: 1,
        scrub: 1.4,
        pin:true,
        // markers:true,
      },
      y:-1700,
    },"scroll")
    abouTl1.to(".aboutusRightSection", {
      scrollTrigger: {
        trigger: ".aboutusWraper",
        start: "top -3%",
        end:"bottom 10%",
        duration: 1,
        scrub: 1.4,
      },
      y:-1750,
    },"scroll")
    abouTl1.to(".aboutusCenterSection", {
      scrollTrigger: {
        trigger: ".aboutusWraper",
        start: "top -3%",
        end:"bottom 10%",
        duration: 1,
        scrub: 1.4,
        // markers:true,
      },
      y:-500,
    },"scroll")
    // abouTl1.to(".aboutusmainSection", {
    //   scrollTrigger: {
    //     trigger: ".aboutusWraper",
    //     start: "top 0%",
    //     end:"bottom 60%",
    //     duration: 1,
    //     scrub: 2,
    //     // markers:true,
    //   },
    //   y:"-60%",
    // },"scroll")
    abouTl1.to(".aboutusMainImgCont", {
      scrollTrigger: {
        trigger: ".aboutusCenterSection",
        start: "bottom 50%",
        end:"bottom 30%",
        // duration: 1,
        scrub: 1.8,
        // markers:true,
        // pin:true,
      },
      scale:"0.9",
    },"scroll")
  })


  return (
    <div className="aboutusWraper">
      <div className="aboutusSection1">
        <div className="aboutusLetfSection">
          <img src="../Public/Images/img10.jpeg" alt="img" />
          <img src="../Public/Images/img8.jpeg" alt="img" />
          <img src="../Public/Images/img4.jpg" alt="img" />
        </div>
        <div className="aboutusCenterSection">
        </div>
        <div className="aboutusmainSection">
        <div className="aboutusMainImgCont">
          <video autoPlay loop muted className='aboutVideo' src="../videos/aboutVideo.mp4"></video>
        </div>
        </div>
        <div className="aboutusRightSection">
          <img src="../Public/Images/img5.jpg" alt="img" />
          <img src="../Public/Images/img9.jpeg" alt="img" />
          <img src="../Public/Images/img6.jpg" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default About