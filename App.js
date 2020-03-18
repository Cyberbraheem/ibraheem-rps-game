
import React, { useState, useEffect } from "react";

/*
Name: Ibraheem Dawod
Age: 13 years old
Date Finished: Sunday, March 16, 2020


Variable Dictionary:
    RPS: holds the options for the user to click on
    outcomes: the possible outcomes for the game
    RPSu: the users choice
    RPSc: the computers choice
    outcome: starts off as a string but holds the outcome of the game
    timer: holds the 3,2,1 go
    timers: holds the setInterval property
    score: holds the score

Program:
    This react app is made from hooks and is s Rock, Paper, Scissors game.
    It shows three options(Rock, Paper or Scissors) and when you click one it has a 3 second count down.
    It then shows the computers choice and the outcome.
    If you win, you get 3 points.
    If you lose, you lose 3 points.
    If you tie, you gain 1 point.
    There is a reset button which resets the game back to the starting position.
*/

function App() {
    const RPS = ["Rock", "Paper", "Scissors"];
    const outcomes = ["It's a tie", "The computer wins", "You win!"];
    const [RPSu, setRPSu] = useState(null);
    const [RPSc, setRPSc] = useState(null);
    const [outcome, setOutcome] = useState('Choose Rock, Paper or Scissors');
    const [timer, setTimer] = useState(null)
    const [timers, setTimers] = useState(null)
    const [score, setScore] = useState(0)


    function handleClick(playerChoice) {
        let computerChoice = Math.floor(Math.random() * RPS.length);
        // outcome index: 0: tie, 1: computer won, 2: player won
        const oi = (computerChoice - playerChoice + 3) % 3;
        setRPSc(RPS[computerChoice]);
        setOutcome(outcomes[oi])
        if (oi === 2) {
            // or if you won
            setScore(score + 3)
        }  else if(oi === 1)  {
            if (score > 0) {
                //if there is score to take away from, do it
                setScore(score - 1)
            }
        }
    }

    // timer is called whenever a choice is chosen
    function Timer(i) {
        // first 3 lines are just clearing the old values
        setRPSc(null)
        clearInterval(timers)
        setRPSu(RPS[i]);
        // starts a timer and minuses one every time
        let time = 3;
        setTimer(time)
        setTimers(setInterval(() => {
            time--;
            setTimer(time);
            // the reason it's -1 and not 0 is because I wanted it to show 'Go!' before the answer
            if (time === -1) {
                handleClick(i)
                clearInterval(timers)
            }
            // passes time to checkTimer so that it can end the timer when time === 0
            checkTimer(time);
        }, 400))
    }
    function checkTimer(time) {
        if (time <= 0) {
            setTimer('Go!')
        }
    }
    
    //resets everything to the same as the intial render
    function reset() {
        clearInterval(timers)
        setScore(0)
        setOutcome('Choose Rock, Paper or Scissors')
        setTimer(null)
        setRPSu(null)
        setRPSc(null)
    }

    return (
        <div id="container">
            //mapping the RPS so as to not repeat
            {RPS.map((choice, i) => (
                <button id='choice' key={i} onClick={() => Timer(i)}>
                    {choice}
                </button>
            ))}
            <h2 id="uOutput">You selected: {RPSu}</h2>
            <h1 id="cOutput">The computer selected: {RPSc}</h1>
            <h1 id='outcome'>{outcome}</h1>
            <h1 id='time'>{timer}</h1>
            <div id="reset" onClick={() => reset()}>Reset</div>
            <div id="score">{score}</div>
        </div>
    );
}

export default App;

