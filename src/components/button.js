//Import React
import React from 'react';

//Create button component
const Button = (props) => {
    return ( <
        input type = "button"
        onClick = { props.handleClick }
        value = { props.label }

        / >
    );
}

//Export Button
export default Button;