import React from "react";

const Scroll = (props) => {

    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '650px'}}>
            {/*Passing props.children to the div*/}
            {props.children}
        </div>
    );

};

export default Scroll;