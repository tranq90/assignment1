import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello I am {props.username}.</p>
            <p>Cool</p>
        </div>
    )
}

export default useroutput;