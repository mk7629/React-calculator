//Import React
import React from 'react';
//Import Display Row
import DisplayRow from './displayRow.js';

//hold two display rows
const Display = (props) => {
    return ( <
        div className = "display" >
        <
        DisplayRow value = { props.question }
        / > <
        DisplayRow value = { props.answer }
        / > < /
        div >
    );
}

//Export Display
export default Display;