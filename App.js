import React, { useState, useEffect } from "react";

/*
Name: Ibraheem Dawod
Age: 13 years old
Date Finished: Sunday, March 18, 2020


Variable Dictionary:
    RPS: holds the options for the user to click on
    outcomes: the possible outcomes for the game
    RPSu: the users choice
    RPSc: the computers choice
    outcome: starts off as a string but holds the outcome of the game
    max: holds the max number for points
    timer: holds the 3,2,1 go
    timers: holds the setInterval property
    uScore: holds the users wins
    cScore: holds the computers wins
    win: holds whether you won or lost

Program:
    This react app is made from hooks and is a Rock, Paper, Scissors game.
    You choose how many points you want the max to be.
    It shows three options(Rock, Paper or Scissors) and when you click one it has a 3 second count down.
    During that 3 second countdown, it says 'Rock, Paper, Scissors, Shoot!'
    It then shows the computers choice and the outcome.
    If you win, you get a point
    If the computer wins, the computer gets a point.
    The first to the max points wins the whole game and it says whether you won or lost at the end.
*/

function App() {
    const RPS = ["Rock", "Paper", "Scissors"];
    const outcomes = ["It's a tie", "The computer wins", "You win!"];
    const amount = [3, 5, 7, 9, 11, 13]
    const [RPSu, setRPSu] = useState(null);
    const [RPSc, setRPSc] = useState(null);
    const [outcome, setOutcome] = useState('Choose Rock, Paper or Scissors');
    const [max, setMax] = useState(null)
    const [timer, setTimer] = useState(null)
    const [timers, setTimers] = useState(null)
    const [uScore, setUScore] = useState(0)
    const [cScore, setCScore] = useState(0)
    const [win, setWin] = useState(null)

    useEffect(() => {
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('starting').style.display = 'block';
        document.getElementById('container').style.display = 'none';
        document.getElementById('winner').style.display = 'none';
    }, [])

    function startGame(change) {
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('winner').style.display = 'block';
        document.getElementById('starting').style.display = 'none';
        setMax(change - 1);
        setTimer(`First to ${change}`);
        reset();
    }

    function handleClick(playerChoice) {
        let computerChoice = Math.floor(Math.random() * RPS.length);
        // outcome index: 0: tie, 1: computer won, 2: player won
        const oi = (computerChoice - playerChoice + 3) % 3;
        setRPSc(RPS[computerChoice]);
        setOutcome(outcomes[oi])
        if (oi === 2) {
            // if user won
            if (uScore === max) {
                // if user gets to 3 first, say that the user won
                document.getElementById('gameOver').style.display = 'block';
                document.getElementById('container').style.display = 'none';
                document.getElementById('winner').style.display = 'none';
                // adds one here so that the end screen shows the correct output
                setUScore(uScore + 1)
                setWin('won')
            } else {
                // unless the user won, keep giving them points
                setUScore(uScore + 1)
            }
        } else if (oi === 1) {
            // if computer won

            if (cScore === max) {
                document.getElementById('gameOver').style.display = 'block';
                document.getElementById('container').style.display = 'none';
                document.getElementById('winner').style.display = 'none';
                // adds one here so that the end screen shows the correct output
                setCScore(cScore + 1)
                // say you lost
                setWin('lost')
            } else {
                //unless the computer won, keep giving it points
                setCScore(cScore + 1)
            }
        }
    }

    function Timer(i) {
        // sets the users value equal to what he clocked while clearing old variables
        setRPSc(null)
        clearInterval(timers)
        setRPSu(RPS[i]);
        let time = 3;
        // sets timer to rock so that it starts off with showing 'Rock' and then proceeds to checkTimer
        setTimer('Rock')
        setTimers(setInterval(() => {
            time--;
            setTimer(time);
            console.log(time)
            if (time === -1) {
                // it says minus one here because at 0 I wanted for it to say 'Go!' and then it shows the outcome
                handleClick(i)
                clearInterval(timers)
            }
            // passes time to checkTimer so that it can end the timer when time === 0
            checkTimer(time);
        }, 400))
    }

    function checkTimer(time) {
        // this code counts down and instead of showing 3,2,1 it shows RPS shoot
        if (time === 2) {
            setTimer('Paper')
        } else if (time === 1) {
            setTimer('Scissors')
        } else if (time <= 0) {
            setTimer('Shoot!')
        }
    }

    function playAgain() {
        // whenever you want to play again, it goes back to the screen where you choose the max
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('container').style.display = 'none';
        document.getElementById('winner').style.display = 'none';
        document.getElementById('starting').style.display = 'block';
    }

    function reset() {
        // resets all the variables
        clearInterval(timers)
        setUScore(0)
        setCScore(0)
        setOutcome('Choose Rock, Paper or Scissors')
        setRPSu(null)
        setRPSc(null)
    }

    return (
        <>
            <div id='starting'>
                <h3 style={{ backgroundColor: 'transparent' }}>First to..?</h3>
                {amount.map((change) => (
                    <button id='num' key={change} onClick={() => startGame(change)}>{change}</button>
                ))}
            </div>
            <div id='gameOver'>
                <h1 style={{ backgroundColor: 'transparent' }}> Game Over </h1>
                <h3 style={{ backgroundColor: 'transparent' }}>You {win} {uScore} to {cScore}!</h3>
                <div id="play-again" onClick={() => playAgain()}>Play Again</div>
            </div>
            <div id='winner'>
                <div id="user">User: {uScore}</div>
                <div id="computer">Computer: {cScore}</div>
            </div>
            <div id="container">
                {RPS.map((choice, i) => (
                    <button id='choice' key={i} onClick={() => Timer(i)}>
                        {choice}
                    </button>
                ))}
                <h2 id="uOutput">You selected: {RPSu}</h2>
                <h1 id="cOutput">The computer selected: {RPSc}</h1>
                <h1 id='outcome'>{outcome}</h1>
                <h1 id='time'>{timer}</h1>
                <div id="reset" onClick={() => playAgain()}>Reset</div>
            </div>
        </>
    );
}

export default App;
