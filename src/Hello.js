import React, {Component} from "react";
import './Hello.css';

class Hello extends Component {

    render() {

        return (

            <div>

                <h1>This is Hello.js</h1>

                <p>It's a class</p>

                <p> Prop: {this.props.helloProp}</p>

            </div>

        );

    }

}

export default Hello;