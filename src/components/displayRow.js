//Import React
import React from 'react';

//Show input/output
const DisplayRow = (props) => {
    return ( < div className = "display-row" >
        <
        input type = "text"
        readOnly value = { props.value }
        / > <
        /div >
    )
}

//Export Display Row
export default DisplayRow;