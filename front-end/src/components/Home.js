import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Menu, Header, Icon, Modal, Button, Container } from "semantic-ui-react";
import { HashRouter, Route } from "react-router-dom";

import SCP_foundation from '../images/SCP_Foundation.png';
import chika from '../images/Chika_Sticker.png';
import '../App.css';

class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
			modalIsLoaded: false,
			modalOpen: false
		}
	}

	handleClose = () => this.setState({
		modalOpen: false,

		bottomText: "",
		topText: "",
		loading: true
	});

	openModal = (e) => {
		this.setState({
			modalIsLoaded: true,
			modalOpen: true
		});
	}

    render() {
        return (
            <div>
                <Modal open={this.state.modalOpen} onClose={this.handleClose} id="modalthing">
                    <Header id="modalheader" content="PeePeePooPooPopUp"/>
                    <Modal.Content id="content1">
                        <center>
                            <iframe id="driveListen" width="800" height="500" src="https://app.drive-listen.com"/>
                        </center>
                    </Modal.Content>
                    <Modal.Actions id="bottomarea">
                        <Button color="red" onClick={this.handleClose} inverted>
                            <Icon name="cancel"/> Close
                        </Button>
                    </Modal.Actions>
                </Modal>
                <p></p>
                <header className="App-header">
                    <h1 id="welcome">
                        W E L C O M E
                    </h1>
                    <img id="SCPthing" src={SCP_foundation} className="App-logo" alt="logo" />
                    <p>
                        Cindy is a poo poo face
                    </p>
                    <p>
                        Sphynx of Black Quartz, Judge My Vow
                    </p>
                    <a
                    className="App-link"
                    href="https://duckduckgo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >DuckDuckGo</a>

                    <div class="row">
                        <div class="column">
                            <h2></h2>
                            <button id="peepoobutton" onClick={(event) => this.openModal(event)}>
                                Useless Button
                            </button>
                        </div>

                        <div class="column">
                            <h2></h2>
                            <a target="_blank" href="https://www.youtube.com/watch?v=-rokG9XS37w">
                                <img id="chika" src={chika} alt="test image"/>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Home;