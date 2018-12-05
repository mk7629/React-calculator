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

        //Set default state
        this.state = {
            input: '',
            output: ''
        };
        console.log(this.state);
        //Bind handleclick event
        this.handleClick = this.handleClick.bind(this);
    }


    //handleClick event
    // our method to handle all click events from our buttons 
    handleClick(event) {

        // get the value from the target element (button) 
        const value = event.target.value;

        switch (value) {
            case '=':
                {

                    // if it's an equal sign, use the eval module 
                    // to evaluate the question ,convert the answer 
                    // (in number) to String 
                    if (this.state.input !== '') {
                        var ans = '';
                        try {
                            ans = eval(this.state.input);
                        } catch (err) {
                            this.setState({ output: "Math Error" });
                        }
                        if (ans === undefined)
                            this.setState({ output: "Math Error" });

                        // update answer in our state. 
                        else
                            this.setState({ input: ans, output: '' });
                        break;
                    }
                }
            case 'Clear':
                {

                    // if it's the Clears sign, just clean our 
                    // question and answer in the state 
                    this.setState({ input: '', output: '' });
                    break;
                }

            case 'Delete':
                {
                    var str = this.state.input;
                    str = str.substr(0, str.length - 1);
                    this.setState({ input: str });
                    break;
                }

            default:
                {

                    // for every other commmand, update the answer in the state 
                    this.setState({ input: this.state.input += value })
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
            Display / >
            <
            div className = "button-row" >
            <
            Button label = { 'Clear All' }
            handleClick = { this.handleClick }
            />  <
            Button label = { 'Delete' }
            handleClick = { this.handleClick }
            />  < /
            div > <
            div className = "button-row" >
            <
            Button label = { '7' }
            handleClick = { this.handleClick }
            /> <
            Button label = { '8' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '9' }
            handleClick = { this.handleClick }
            /> <
            Button label = { '*' }
            /> < /
            div > <
            div className = "button-row" >
            <
            Button label = { '4' }
            handleClick = { this.handleClick }
            /> <
            Button label = { '5' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '6' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '-' }
            handleClick = { this.handleClick }
            />   < /
            div > <
            div className = "button-row" >
            <
            Button label = { '1' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '2' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '3' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '+' }
            handleClick = { this.handleClick }
            />   < /
            div > <
            div className = "button-row" >
            <
            Button label = { '.' }
            handleClick = { this.handleClick }
            />  <
            Button label = { '0' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '=' }
            handleClick = { this.handleClick }
            />   <
            Button label = { '/' }
            handleClick = { this.handleClick }
            /> < /
            div > < /
            div > <
            /div>
        );
    }
};

//Export Calculator
export default Calculator;