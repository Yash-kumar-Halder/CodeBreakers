import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom';

function Quizsection() {

    gsap.registerPlugin();
    useGSAP(() => {
        let qScetiontl = gsap.timeline();

        // qScetiontl.to(".quizSectionImg", {
        //     scale: 0.5,
        //     scrollTrigger: {
        //         trigger: ".quizSectionWraper",
        //         start: "top 0%",
        //         end: "bottom 0%",
        //         scrub: 2,
        //         markers: true,
        //         pin: true
        //     }
        // })

        qScetiontl.to(".quizcard1ImgCont", {
            scale: 0.5,
            scrollTrigger: {
                trigger: ".quizSectionContainer",
                start: "top 0%",
                end: "bottom 80%",
                scrub: 1,
            }
        })

        qScetiontl.to(".quizCard2 .quizCardLeft img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".quizSectionContainer",
                start: "top -15%",
                end: "bottom 60%",
                scrub: 1,
            }
        })

        qScetiontl.to(".quizCard3 .quizCardLeft img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".quizSectionContainer",
                start: "top -80%",
                end: "bottom -10%",
                scrub: 1,
            }
        })

        qScetiontl.to(".quizCard4 .quizCardLeft img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".quizSectionContainer",
                start: "top -170%",
                end: "bottom -100%",
                scrub: 1,
            }
        })

        qScetiontl.to(".quizSectionWraper", {
            x: "-75%",
            scrollTrigger: {
                trigger: ".quizSectionContainer",
                start: "top 0%",
                end: "bottom -200%",
                scrub: 1,
                pin: true
            }
        })
    })

    return (
        <div className="quizSectionContainer">
            <div className="quizSectionWraper">
                <div className="quizCard quizCard1">
                    <div className="quizcard1ImgCont"></div>
                </div>
                <div className="quizCard quizCard2">
                    <div className="quizCardLeft">
                        <img src="../Public/Images/pyss.png" alt="" />
                    </div>
                    <div className="quizCardRight">
                        <h1>HTML QUIZ APPLICATION</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias velit nesciunt ipsum numquam error ea vel fugiat aspernatur nam reprehenderit?</p>
                        <button><button> <NavLink to="/htmlquiz">Goto Quiz</NavLink> </button></button>
                    </div>
                </div>

                <div className="quizCard quizCard3">
                    <div className="quizCardLeft">
                        <img src="../Public/Images/pyss.png" alt="" />
                    </div>
                    <div className="quizCardRight">
                        <h1>C QUIZ APPLICATION</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias velit nesciunt ipsum numquam error ea vel fugiat aspernatur nam reprehenderit?</p>
                        <button><button> <NavLink to="/cquiz">Goto Quiz</NavLink> </button></button>
                    </div>
                </div>

                <div className="quizCard quizCard4">
                    <div className="quizCardLeft">
                        <img src="../Public/Images/pyss.png" alt="" />
                    </div>
                    <div className="quizCardRight">
                        <h1>PYTHON QUIZ APPLICATION</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias velit nesciunt ipsum numquam error ea vel fugiat aspernatur nam reprehenderit?</p>
                        <button><button> <NavLink to="/pyquiz">Goto Quiz</NavLink> </button></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Quizsection