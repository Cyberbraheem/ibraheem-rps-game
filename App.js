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
    timer: holds the 3,2,1 go
    timers: holds the setInterval property
    uScore: holds the users wins
    cScore: holds the computers wins
    win: holds whether you won or lost

Program:
    This react app is made from hooks and is a Rock, Paper, Scissors game.
    It shows three options(Rock, Paper or Scissors) and when you click one it has a 3 second count down.
    It then shows the computers choice and the outcome.
    If you win, you get a point
    If the computer wins, the computer gets a point.
    The first to 3 points wins the whole game and it says whether you won or lost at the end.
*/

function App() {
    const RPS = ["Rock", "Paper", "Scissors"];
    const outcomes = ["It's a tie", "The computer wins", "You win!"];
    const [RPSu, setRPSu] = useState(null);
    const [RPSc, setRPSc] = useState(null);
    const [outcome, setOutcome] = useState('Choose Rock, Paper or Scissors');
    const [timer, setTimer] = useState(null)
    const [timers, setTimers] = useState(null)
    const [uScore, setUScore] = useState(0)
    const [cScore, setCScore] = useState(0)
    const [win, setWin] = useState('Shoot!')

    useEffect(() => {
        document.getElementById('gameOver').style.display = 'none';
    }, [])

    function startGame() {
        document.getElementById('gameOver').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('winner').style.display = 'block';
    }

    function handleClick(playerChoice) {
        let computerChoice = Math.floor(Math.random() * RPS.length);
        // outcome index: 0: tie, 1: computer won, 2: player won
        const oi = (computerChoice - playerChoice + 3) % 3;
        setRPSc(RPS[computerChoice]);
        setOutcome(outcomes[oi])
        if (oi === 2) {
            // if user won
            if (uScore === 3) {
                // if user gets to 3 first, say that the user won
                document.getElementById('gameOver').style.display = 'block';
                document.getElementById('container').style.display = 'none';
                document.getElementById('winner').style.display = 'none';
                setUScore(0)
                setCScore(0)
                setWin('won')
            } else {
                // unless the user won, keep giving them points
                setUScore(uScore + 1)
            }
        } else if (oi === 1) {
            // if computer won

            if (cScore === 3) {
                // say you lost
                document.getElementById('gameOver').style.display = 'block';
                document.getElementById('container').style.display = 'none';
                document.getElementById('winner').style.display = 'none';
                setUScore(0)
                setCScore(0)
                setWin('lost')
            } else {
                //unless the computer won, keep givint it points
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
        // sets timer to time here since it would usually output 2 instead of 3 because of the way it renders
        setTimer(time)
        setTimers(setInterval(() => {
            time--;
            setTimer(time);
            console.log(time)
            if (time === -1) {
                // it says minus one here because at 0 I wanted for it to say 'Go!' and then it shows the outcome
                handleClick(i)
                clearInterval(timers)
            }
            // passes time to checkTimer so that it can end the timer when tiem === 0
            checkTimer(time);
        }, 400))
    }

    function checkTimer(time) {
        if (time <= 0) {
            setTimer('Go!')
        }
    }

    function reset() {
        // resets all the variables
        clearInterval(timers)
        setUScore(0)
        setCScore(0)
        setOutcome('Choose Rock, Paper or Scissors')
        setTimer(null)
        setRPSu(null)
        setRPSc(null)
    }

    return (
        <div>
            <div id='gameOver'>
                <h1 style={{ backgroundColor: 'transparent' }}> Game Over </h1>
                <h3 style={{ backgroundColor: 'transparent' }}>You {win}!</h3>
                {/* <h3 style={{ backgroundColor: 'transparent' }}>You {best} a highscore</h3> */}
                <div id="play-again" onClick={() => startGame()}>Play Again</div>
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
                <div id="reset" onClick={() => reset()}>Reset</div>
            </div>
        </div>
    );
}

export default App;
