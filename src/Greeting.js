import React from "react";

const Greeting = (props) => {

        return (

            <div>

                <h1>This is Greeting.js</h1>

                <p>It's a const</p>

                <p> Prop: {props.greetingProp}</p>

            </div>

        );

}

export default Greeting;