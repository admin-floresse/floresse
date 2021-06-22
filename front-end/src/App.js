import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Source from "./components/Explore";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

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
			<Router id="thing">
				<div className="App">
					<TopMenu state = {this.state}/>
					<div>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/Explore" component={Source}/>
							<Route exact path="/About" component={About}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;