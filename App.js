// import React from "react"
// replacing new state
//pass word for ibraheem.n.dawod@gmail.com: #Barca101

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.goBack = this.goBack.bind(this)
//     this.doubleNumber = this.doubleNumber.bind(this)
//     this.halfNumber = this.halfNumber.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   goBack() {
//     this.setState(function () {
//       return {
//         count: 0
//       }
//     })
//   }

//   doubleNumber() {
//     this.setState(doubleNum => {
//       return {
//         count: doubleNum.count * 2
//       }
//     })
//   }

//   halfNumber() {
//     this.setState(halfNum => {
//       return {
//         count: halfNum.count / 2
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//         <button onClick={this.goBack}>Go back to 0</button>
//         <button onClick={this.doubleNumber}>Double the number</button>
//         <button onClick={this.halfNumber}>Half the number</button>
//       </div>
//     )
//   }
// }

// export default App
/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
//     // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
//     this.setState(prevState => {
//       const updatedState = prevState.todos.map(todo => {
//         if (todo.id == id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedState
//       }
//     }
//     )

//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }

// export default App
// import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

// import React, { Component } from "react"

// // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// class TodoList extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }

//   static getDerivedStateFromProps(props, state) {
//     // return the new, updated state based upon the props
//     // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
//     // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
//   }

//   getSnapshotBeforeUpdate() {
//     // create a backup of the current way things are
//     // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
//   }

//   // componentWillMount() {

//   // }

//   componentDidMount() {
//     // GET the data I need to correctly display
//   }

//   // componentWillReceiveProps(nextProps) {
//   //     if (nextProps.whatever !== this.props.whatever) {
//   //         // do something important here
//   //     }
//   // }

//   shouldComponentUpdate(nextProps, nextState) {
//     // return true if want it to update
//     // return false if not
//   }

//   // componentWillUpdate() {

//   // }

//   componentWillUnmount() {
//     // teardown or cleanup your code before your component disappears
//     // (E.g. remove event listeners)
//   }

//   render() {
//     return (
//       <div>
//         Code goes here
//             </div>
//     )
//   }
// }

// export default App
// import React, { Component } from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             unreadMessages: ["a", "b", 'c']
//         }
//     }
//     // &&
//     // false && false
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.unreadMessages.length > 0 &&
//                     <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//                 }
//             </div>
//         )
//     }
// }

// // export default App
// import React, { useState } from 'react'
// import handleChoice from "./handleChoice"

// function App() {

//     const [RPSc, setRPSc] = useState(['Rock', 'Paper', 'Scissors'])
//     const [RPSu, setRPSu] = useState(null)
//     const [randomNum, setrandomNum] = useState(null)
//     const [outcome, setOutcome] = useState('')
//     const [RPSca, setRPSca] = useState(null) // new state for contining the outcome message

//     // function handleClickRock() {
//     //     const min = 0;
//     //     const max = 3;
//     //     const random = min + (Math.random() * (max - min));
//     //     this.setState({ random })
//     //     this.setState({
//     //         rockPaperScissorsUser: 'Rock'
//     //     })
//     // }
//     // function handleClickPaper() {
//     //     const min = 0;
//     //     const max = 3;
//     //     const random = min + (Math.random() * (max - min));
//     //     this.setState({ random })
//     //     this.setState({
//     //         rockPaperScissorsUser: 'Paper'
//     //     })
//     // }
//     // function handleClickScissors() {
//     //     const min = 0;
//     //     const max = 3;
//     //     const random = (Math.random() * (3));
//     //     this.setState({ random })
//     //     this.setState({
//     //         rockPaperScissorsUser: 'Scissors'
//     //     })
//     // }


//     function handleClick(type) {
//         const min = 0;
//         const max = 3;
//         setRPSu(type)
//         setrandomNum(Math.floor(min + (Math.random() * (max - min))))
//         setRPSca(RPSc[randomNum])
//         setOutcome(
//             <h1>{
//                 ((RPSu === 'Rock') && (RPSca === 'Scissors')) ||
//                     ((RPSu === 'Paper') && (RPSca === "Rock")) ||
//                     ((RPSu === 'Scissors') && (RPSca === "Paper")) ? 'You win' :
//                     (RPSc[randomNum] === RPSu) ? "It's a tie" : 'The computer wins'
//             }{console.log(RPSu + RPSca + randomNum)}</h1>
//         )
//     }

//     return (
//         <div>
//             <button value="Click me!" onClick={() => handleClick('Rock')}>Rock</button>
//             <button value="Click me!" onClick={() => handleClick('Paper')}>Paper</button>
//             <button value="Click me!" onClick={() => handleClick('Scissors')}>Scissors</button>

//             <h2 className="x">You selected: {RPSu}</h2>
//             <h1 className='x'>The computer selected: {RPSca}</h1>

//             {outcome}
//         </div>
//     );
// }

// export default App;
/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }

// export default App
// import React, { Component } from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <input
//                     type="text"
//                     value={this.state.firstName}
//                     name="firstName"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     value={this.state.lastName}
//                     name="lastName"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                 />
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//             </form>
//         )
//     }
// }

// export default App

// import React, { Component } from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         const { name, value, type, checked } = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     value={this.state.firstName}
//                     name="firstName"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     value={this.state.lastName}
//                     name="lastName"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                 />

//                 {
//                     /**
//                      * Other useful form elements:
//                      * 
//                      *  <textarea /> element
//                      *  <input type="checkbox" />
//                      *  <input type="radio" />
//                      *  <select> and <option> elements
//                      */
//                 }

//                 <textarea
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <label>
//                     <input
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />

//                 <label>Favorite Color:</label>
//                 <select
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>

//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }
import React, { useState, useEffect } from "react";

/*
Name: Ibraheem Dawod
Age: 13 years old
Date Finished: Sunday, March 17, 2020


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
            setScore(score + 3)
        } else if (oi === 0) {
            setScore(score + 1)
        } else {
            if (score > 0) {
                setScore(score - 3)
            }
        }
    }

    function Timer(i) {
        setRPSc(null)
        clearInterval(timers)
        setRPSu(RPS[i]);
        let time = 3;
        setTimer(time)
        setTimers(setInterval(() => {
            time--;
            setTimer(time);
            console.log(time)
            if (time === -1) {
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
        clearInterval(timers)
        setScore(0)
        setOutcome('Choose Rock, Paper or Scissors')
        setTimer(null)
        setRPSu(null)
        setRPSc(null)
    }

    return (
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
            <div id="score">{score}</div>
        </div>
    );
}

export default App;

