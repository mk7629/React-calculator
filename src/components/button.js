//Import React
import React from 'react';

//Create button component
const Button = (props) => {
    return ( <
        input type = "button"
        value = { props.label }
        onClick = { props.handleClick }
        / >
    )
}

//Export Button
export default Button;