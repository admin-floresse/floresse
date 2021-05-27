import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Menu, Header, Icon, Modal, Container } from "semantic-ui-react";

import "../css/Explore.css";

export default class Explore extends Component {
    render() {
        return (
            <header className="explore-header">
                <Container>
                    <h1 id="exploreMainTitle">
                        E X P L O R E 
                    </h1>
                    <div classname="Explorething">

                    </div>
                </Container>
            </header>
        );
    }
}