import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { clipPath } from 'framer-motion/client'
import Fixedmenu from './Fixedmenu'


function Navigation() {

  const body = document.body;
  let navigation = document.querySelector(".navigation")
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      // navigation.classList.remove("hideNav")
    }
    if (currentScroll > lastScroll && currentScroll >= 4) {
      body.classList.add("hideNav");
      // body.classList.add("scrollLogo");
    }
    if (currentScroll < lastScroll) {
      body.classList.remove("hideNav");
    }

    lastScroll = currentScroll;
  })

  gsap.registerPlugin();
  useGSAP(() => {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    tl.to(".fixedmenuwraper", {
      height: "100%",
      borderRadius: "0% 0% 0% 0%",
      duration: 0.5,
      ease: "cubic-bezier(0.45, 0, 0.55, 1)"
    });

    tl.to(".fixedmenuwraper .fixedMenuText", {
      y: "0%",
      duration: 0.4,
      stagger: 0.1
    })

    tl2.to(".menuIcon", {
      scale: 0,
      duration: 0.35
    }, "a");
    tl2.to(".closeIcon", {
      scale: 1,
      duration: 0.35
    }, "a")
    tl2.pause()

    tl.pause();




    document.querySelector(".menuIcon").addEventListener('click', () => {
      tl.play();
      tl2.play();
    })
    document.querySelector(".closeIcon").addEventListener('click', () => {
      tl.reverse();
      tl2.reverse();
    })
    document.querySelector(".fixedMenuText1").addEventListener('click', () => {
      tl.reverse();
      tl2.reverse();
      console.log("hello clicked")
    })
    document.querySelector(".fixedMenuText2").addEventListener('click', () => {
      tl.reverse();
      tl2.reverse();
      console.log("hello clicked")
    })
    document.querySelector(".fixedMenuText3").addEventListener('click', () => {
      tl.reverse();
      tl2.reverse();
      console.log("hello clicked")
    })
    document.querySelector(".fixedMenuText4").addEventListener('click', () => {
      tl.reverse();
      tl2.reverse();
      console.log("hello clicked")
    })

  })


  return (
    <>
      <header className='navigation'>
        <nav>
          <NavLink to="/" className='navScrollLogo'>CodeBreakers</NavLink>
          <NavLink to="/" className='navLeft navLogo'>CodeBreakers</NavLink>
          <div className='navRight'>
            <NavLink to="/" className={({ isActive }) => `navLinks ${isActive ? "active" : "unActive"}`}>Home</NavLink>

            <NavLink to="/technology" className={({ isActive }) => `navLinks ${isActive ? "active" : "unActive"}`}>Technology</NavLink>

            <NavLink to="/quiz" className={({ isActive }) => `navLinks ${isActive ? "active" : "unActive"}`}>Quiz</NavLink>

            <NavLink to="/about" className={({ isActive }) => `navLinks ${isActive ? "active" : "unActive"}`}>About</NavLink>

            <div className="navLoginCont">
              <NavLink to="/singup" className="navSingupBtn">Sing Up</NavLink>
              <NavLink to="/login" className="navLoginBtn">Login</NavLink>
            </div>

            <div className="menuIconContainer">
              <svg className='menuIcon' xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>

              <svg className='closeIcon' xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <Fixedmenu />
    </>
  )
}

export default Navigation