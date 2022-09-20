import React from "react";

const Scroll = (props) => {

    return (

        <div style={{overflowY: 'scroll', border: '1px solid black', height: '820px'}}>

            {/*Passing props.children to the div. This will allow us to wrap the Scroll component around the CardList component*/}
            {props.children}

        </div>

    );

};

export default Scroll;