import React, { Component } from 'react';
import './index.css';
class Home extends Component {
    render() {
        return (
            <div className={"homeContainer"}>
                <h1 className={"h1tag"}>{"Hello from Home"}</h1>
                <h2 id={"h2tag"}>{"Hello from Home"}</h2>
                <h3>{"Hello from Home"}</h3>
            </div>
        );
    }
}

export default Home;