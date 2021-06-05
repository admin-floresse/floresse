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
                    <div className="Aboutthing">
                        <h2 id="aboutTitles">
                            Intro
                        </h2>
                        <p id="aboutContent">
                            This repo is designated for all use relating to the exploratory phase of developing Squinchnet. 
                            Here collaborators can organize and share their thoughts about different possible services 
                            Squinchnet can provide as well as experiment with possible features. Each first-level directory 
                            in the repo represents a service provided by Squinchnet and will be referred to as a 'service directory' 
                            throughout the repo. As collaborators think of new services Squinchnet can provide they create a service 
                            directory using the format below or by using the service_directory_template.
                        </p>
                    </div>
                    <img id="scott" alt="scott" src="images/SCOTT.jpg"/>
                    <img id="andy" alt="andy" src="images/ANDY.JPEG"/>
                </Container>
            </header>
            
        );
    }
}