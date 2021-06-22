import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import "../css/About.css";

export default class About extends Component {
    render() {
        return (
            <header className="about-header">
                <Container>
                    <h1 id="aboutMainTitle">
                        A B O U T
                    </h1>
                </Container>
            </header>
            
        );
    }
}