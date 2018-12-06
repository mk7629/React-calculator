//Import 
import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import Display from './display.js';
import Button from './button.js';



//Create Class Component Calculator
class Calculator extends React.Component {

    //Create Status
    constructor() {
        super();

        // set our default state 
        this.state = {
            question: '',
            answer: ''
        }

        // Bind our handleClick method (sets 'this' explicitly 
        // to refer to this componenent) We did this because 'this' 
        // would refer to the source of the click events 
        this.handleClick = this.handleClick.bind(this);
    }


    // our method to handle all click events from our buttons
    handleClick(event) {
        const value = event.target.value; // get the value from the target element (button)
        switch (value) {
            case '=':
                { // if it's an equal sign, use the eval module to evaluate the question
                    // convert the answer (in number) to String
                    const answer = eval(this.state.question).toString();
                    // update answer in our state.
                    this.setState({ answer });
                    break;
                }
            case 'Clear All':
                {
                    // if it's the CA sign, just clean our question and answer in the state
                    this.setState({ question: '', answer: '' });
                    break;
                }
            case 'Delete':
                {
                    var str = this.state.question;
                    str = str.substr(0, str.length - 1);
                    this.setState({ question: str });
                    break;
                }
            default:
                {
                    // for every other commmand, update the answer in the state
                    this.setState({ question: this.state.question += value })
                    break;
                }
        }
    }


    //Rendering
    render() {
        return ( <
            div className = "frame" >
            <
            CalculatorTitle value = "Simple React Calculator" / >
            <
            div class = "mainCalc" >
            <
            Display question = { this.state.question }
            answer = { this.state.answer }
            /> <
            div className = "button-row" >
            <
            Button handleClick = { this.handleClick }
            label = { 'Clear All' }

            />  <
            Button handleClick = { this.handleClick }
            label = { 'Delete' }

            />  < /
            div > <
            div className = "button-row" >
            <
            Button handleClick = { this.handleClick }
            label = { '7' }
            /> <
            Button handleClick = { this.handleClick }
            label = { '8' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '9' }


            /> <
            Button handleClick = { this.handleClick }
            label = { '*' }
            /> < /
            div > <
            div className = "button-row" >
            <
            Button handleClick = { this.handleClick }
            label = { '4' }

            /> <
            Button handleClick = { this.handleClick }
            label = { '5' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '6' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '-' }

            />   < /
            div > <
            div className = "button-row" >
            <
            Button handleClick = { this.handleClick }
            label = { '1' }
            / > <
            Button handleClick = { this.handleClick }
            label = { '2' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '3' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '+' }

            />   < /
            div > <
            div className = "button-row" >
            <
            Button handleClick = { this.handleClick }
            label = { '.' }

            />  <
            Button handleClick = { this.handleClick }
            label = { '0' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '=' }

            />   <
            Button handleClick = { this.handleClick }
            label = { '/' }

            /> < /
            div > < /
            div > <
            /div>
        );
    }
};

//Export Calculator
export default Calculator;