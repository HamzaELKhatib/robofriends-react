import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";


class App extends Component {

//========================================================================================================
    constructor() {

        super();

        this.state = {
            robots: [],
            searchfield: ''
        }
    }

//========================================================================================================

    onSearchChange = (event) => {

        this.setState({searchfield: event.target.value});

    }

//========================================================================================================
    render() {

        const filteredRobots = this.state.robots.filter(robot => {

            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

        })

        if (this.state.robots.length === 0) {

            return <h1>Loading...</h1>

        } else {

            return (

                <div className={"tc"}>

                    <h1>RoboFriends</h1>

                    <SearchBox searchChange={this.onSearchChange}/>

                    <Scroll>

                        <CardList robots={filteredRobots}/>

                    </Scroll>

                </div>
            );
        }
    }

//========================================================================================================

    componentDidMount() {

//We fetch the data from the API, and then we map the response to json format, then we map users (which is an array of objects that matches the robots array properties) to the robots array in the state.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users})
            });

    }

}

//========================================================================================================
export default App;