import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Menu, Header, Icon, Modal, Button, Container } from "semantic-ui-react";
import { HashRouter, Route } from "react-router-dom";

import SCP_foundation from './images/SCP_Foundation.png';
import chika from './images/Chika_Sticker.png';
import './App.css';

import Source from "./components/Explore";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {

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
			<HashRouter id="hashthing">
				<div className="App">
					<TopMenu state = {this.state}/>
					<div>
						<Route exact path="/" component={Home}/>
						<Route exact path="/Explore" component={Source}/>
						<Route exact path="/About" component={About}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}
export default App;