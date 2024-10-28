import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

function Technology() {
    gsap.registerPlugin(ScrollTrigger);
    let spanSpace = "&nbsp";


    useGSAP(() => {
        function projectAnimation() {
            let projectTl = gsap.timeline();
            projectTl.to(".p3Img1", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Img1",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3ProjectHeading1", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3ProjectHeading1",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Para1 span", {
                opacity: 1,
                duration: 3,
                stagger: 0.7,
                scrollTrigger: {
                    trigger: ".p3Para1",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".explore1", {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Para1",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Img2", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Img2",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3ProjectHeading2", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3ProjectHeading2",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Para2 span", {
                opacity: 1,
                duration: 3,
                stagger: 0.7,
                scrollTrigger: {
                    trigger: ".p3Para2",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".explore2", {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Para2",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Img3", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Img3",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3ProjectHeading3", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3ProjectHeading3",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Para3 span", {
                opacity: 1,
                duration: 3,
                stagger: 0.7,
                scrollTrigger: {
                    trigger: ".p3Para3",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".explore3", {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Para3",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Img4", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Img4",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3ProjectHeading4", {
                scale: 1,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3ProjectHeading4",
                    start: "top 80%",
                    end: "bottom 70%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".p3Para4 span", {
                opacity: 1,
                duration: 3,
                stagger: 0.7,
                scrollTrigger: {
                    trigger: ".p3Para4",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
            projectTl.to(".explore4", {
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".p3Para4",
                    start: "top 80%",
                    end: "bottom 60%",
                    duration: 1,
                    scrub: true,
                }
            });
        }
        projectAnimation();
    })


    return (
        <div className="pageThree">
            <div className="p3Section">
                <div className="p3SectionLeft">
                    <img src="../Images/htmlbg.jpg" alt="" className="p3Img p3Img1" />
                </div>
                <div className="p3SectionRight">
                    <h2 className='p3ProjectHeading p3ProjectHeading1'>HTML</h2>
                    <div className="p3Para p3Para1">
                        {["Hypertext ", "Markup ", "Language ", "(HTML) ", "is ", "a ", "standerd ", "markup ", "language ", "that ", "defines ", "the ", "structure ", "and ", "content ", "of ", "web ", "pages. ", "HTML ", "elements ", "are ", "the ", "building ", "blocks", "of ", "HTML ", "pages, ", "and ", "are ", "used ", "to ", "label ", "content ", "and ", "tell ", "the ", "browser ", "how", "to ", "display ", "it "].map((item, index) => {
                            return <span key={index} value={index}>{item}</span>
                        })}
                    </div>
                    <a href="#" className="explore explore1">
                        <NavLink to="https://www.w3schools.com/html/">Explore</NavLink>
                        </a>
                </div>
            </div>
            <div className="p3Section">
                <div className="p3SectionLeft">
                    <h2 className='p3ProjectHeading p3ProjectHeading2'>CSS</h2>
                    <div className="p3Para p3Para2">{["Cascading ", "Style ", "Sheets ", "(CSS) ", "is ", "a ", "stylesheet ", "language ", "use ", "to ", "describe ", "the ", "presentation ", "of ", "a ", "document ", "written ", "in ", "HTML ", "or ", "XML. ", "CSS ", "describe ", "how ", "elements ", "should ", "be ", "renderd ", "on ", "screen."].map((item, index) => {
                        return <span key={index}>{item}</span>
                    })}</div>
                    <a href="#" className="explore explore2">
                        <NavLink to="https://www.w3schools.com/css/">Explore</NavLink>
                    </a>
                </div>
                <div className="p3SectionRight">
                    <img src="../Images/cssbg.jpg" alt="" className="p3Img p3Img2" />
                </div>
            </div>
            <div className="p3Section">
                <div className="p3SectionLeft">
                    <img src="../Images/jsbg.jpg" alt="" className="p3Img p3Img3" />
                </div>
                <div className="p3SectionRight">
                    <h2 className='p3ProjectHeading p3ProjectHeading3'>JAVASCRIPT</h2>
                    <div className="p3Para p3Para3">{["JaveScript ", "is, ", "a, ", "programing ", "language, ", "that ", "allows ", "devoloper ", "to ", "create ", "ineractive ", "web ", "pages ", "It's ", "a ", "client-", "side ", "scripting ", "language.", " that's ", "a ", "key ", "technology ", "for ", "the ", "World ", "Wide ", "Web."].map((item, index) => {
                        return <span key={index}>{item}</span>
                    })}</div>
                    <a href="#" className="explore explore3">
                    <NavLink to="https://www.w3schools.com/js/">Explore</NavLink>
                    </a>
                </div>
            </div>
            <div className="p3Section">
                <div className="p3SectionLeft">
                    <h2 className='p3ProjectHeading p3ProjectHeading4'>REACT JS</h2>
                    <div className="p3Para p3Para4">{["user ", "friendly, ", "Interactive, ", "Cleane ", "UI, ", "Easy ", "to ", "use ", "animated ", "QUIZ ", "APP ", "Lorem ", "ipus ", "dolor ", "sit ", "amet ", "consectetur ", "adipicing ", "elit.", " Asperiores ", "volupattem ", "minus ", "tenetiur ", "sapiente", "Lorem ", "ipus ", "dolor ", "sit ", "amet ", "consectetur ", "adipicing ", "elit.", " Asperiores ", "volupattem ", "minus "].map((item, index) => {
                        return <span key={index}>{item}</span>
                    })}</div>
                    <a href="#" className="explore explore4">
                    <NavLink to="https://www.w3schools.com/react/">Explore</NavLink>
                    </a>
                </div>
                <div className="p3SectionRight">
                    <img src="../Images/reactbg.jpg" alt="" className="p3Img p3Img4" />
                </div>
            </div>
        </div>
    )
}

export default Technology