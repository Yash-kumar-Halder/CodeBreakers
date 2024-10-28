import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Guess = () => {
    gsap.registerPlugin();
    let playCardTl;
    let guessCardTl;
    let wonCardTl;
    let loseCardTl;
    let playAgainTl;

    useGSAP(() => {
        playCardTl = gsap.timeline();
        guessCardTl = gsap.timeline();
        wonCardTl = gsap.timeline();
        playAgainTl = gsap.timeline();

        loseCardTl = gsap.timeline();
        playCardTl.to(".play", {
            scale: 1,
            transform: "translate(-50%, -50%)",
        })

        guessCardTl.to(".play", {
            scale: 0,
        })

        guessCardTl.to(".hero", {
            scale: 1,
        })

        guessCardTl.to(".revel", {
            opacity: 1,
            stagger: 0.3,
            duration: 0.4,
        })
        guessCardTl.pause();


        wonCardTl.to(".hero", {
            scale: 0,
        })
        wonCardTl.to(".wonCard", {
            scale: 1,
            transform: "translate(-50%, -50%)",
        })
        wonCardTl.pause();



        loseCardTl.to(".hero", {
            scale: 0,
        })
        loseCardTl.to(".reStart", {
            scale: 1,
            transform: "translate(-50%, -50%)",
        })
        loseCardTl.pause();


        playAgainTl.to(".reStart", {
            scale: 0,
        })
        playAgainTl.to(".play", {
            scale: 1,
            // transform: "translate(-50%, -50%)",
        })
        playAgainTl.pause();
    })

    let playform = document.querySelector(".play");
    let playBtn = document.querySelector(".playBtn");
    let guessCard = document.querySelector(".hero")
    let userGues;
    let userGuess;
    let tryGuess;
    let randomNum;
    let guessCount = 0;

    let playCard = true;

    function playCardFunction() {
        tryGuess = document.querySelector(".tryGuess").value;
        if (tryGuess) {
            guessCardTl.play();
            document.querySelector(".tryGuess").value;
            randomNum = Math.floor(Math.random() * 99) + 1;
            guessCount = 0;
        document.querySelector(".userInput").value = "";
        document.querySelector("#userGuess").innerHTML = "Your Guess: ";
        }
    }

    function restartFunction() {
        loseCardTl.reverse();
        console.log("Clicked");
        guessCount = 0;
        document.querySelector(".userInput").value = "";
        document.querySelector("#userGuess").innerHTML = "Your Guess: ";
    }

    function guessFunction() {
        userGues = document.querySelector(".userInput").value;
        console.log(randomNum)
        if (userGues) {
            guessCount++
            if (guessCount < tryGuess) {
                document.querySelector("#userGuess").innerHTML += `${userGues}, `;
                if (userGues == randomNum) {
                    wonCardTl.play();
                    console.log("you won");
                } else {

                }
            } else if (guessCount == tryGuess && userGues == randomNum) {
                wonCardTl.play();
                console.log("you won");
            } else if (guessCount == tryGuess && userGues != randomNum) {
                loseCardTl.play();
                console.log("you Lose!!!!");
            } else {
                console.log("looseeeeeee")
            }
        } else {
            alert("Plese Enter Guess")
        }
    }


    return (
        <div className="guessWraper">
            <div className="play" name="playCard" >
                <h2>GUESS A NUMBER BETWEEN 0 TO 100</h2>
                <h5 className="tryGuessHeading">How much try you want:</h5>
                <input id="tryGuess" className="tryGuess" required type="number" placeholder="Enter your try number" name="try" />
                <br />
                <button onClick={playCardFunction} className="playBtn" >PLAY</button>
            </div>
            {/* <div id="form1" className="play" name="playCard">
                <h2 id="guessHeading">GUESS A NUMBER BETWEEN 0 TO 100</h2>
                <h5 id="tryGuessHeading" className="tryGuessHeading">How much try ypu want:</h5>
                <input id="tryGuess" type="number" className="tryGuess" placeholder="Enter your guess" />
                <br />
                <button id="play">Play</button>
            </div> */}
            <div className="reStart">
                <h2 className="userConditionHeading">You Loose!!!!</h2>
                <button onClick={restartFunction} className="playAgain">Play again</button>
            </div>
            <div className="wonCard">
                <h2 className="userConditionHeading">Congratulation You Won!!!</h2>
                <button className="playAgain">Play again</button>
                <button className="wonPlayAgain">Play again</button>
            </div>
            <h1 className="heading">Guess The Number</h1>
            <div id="hero form2" action="#" className="hero">
                <h2 id="title" className="title revel">Enter a guess between 1 to 100</h2>
                <div id="userUpdate" className="userUpdate revel">CHOSE A NUMBER</div>
                <input name="input" required className="userInput revel" type="number" placeholder="Enter a number" />
                <button onClick={guessFunction} type="submit" id="submit2" className="submit revel">Submit</button>
                <div id="userGuess" className="guess revel">Your Guess: </div>
            </div>
        </div>
    )
}

export default Guess