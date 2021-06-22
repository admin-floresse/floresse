import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Modal, Button, } from "semantic-ui-react";
import '../App.css';

import background_video from '../videos/crop-test.mp4';
import title_image from '../images/Title.png';
import andy_pic from '../images/ANDY.JPEG';
import scott_pic from '../images/SCOTT.jpg';
;
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
                <div className="title-section">
                    <img src={title_image}/>
                </div>
                
                <div>
                    <div className="background-video-container">
                        <video className="background-video" src={background_video} autoPlay="true" loop="true" muted="true"/>
                    </div>
                </div>
                
                <div className="video-overlay">
                    <h1 className="overlay-title">
                        What we do
                    </h1>

                    <p className="overlay-content">
						Floresse is a locally run organization based in Colorado Springs and 
                        Provo Utah. Our team is composed of passionate Web Developers and Digital 
                        Artists who love to make websites for people. We would like to get to know our clients so that we can make the highest 
                        quality website possible to ensure our customer satisfaction.
					</p>
                </div>

                

                <div className="content-container">
                    <header className="App-header">
                        {/*<img id="SCPthing" src="images/SCP_Foundation.png" className="App-logo" alt="spinning-logo" />*/}
                        <p></p>

                        <div className="profiles">
                            <h1 className="section-headers">
                                About the Team
                            </h1>

                            <div className="andy-container">
                                <div className="profile-picture">
                                    <img id="andy-pic" src={andy_pic}/>
                                    <div className="profile-description">
                                        <h1 id="name">Andy Wilson</h1>
                                        <p id="profile-description">
                                            Andy is a graduate from Colorado State University in Fort 
                                            Collins. With a Bachelor's Degree in Computer Science, Andy 
                                            uses is skills to be a freelance software developer and web 
                                            application developer for Floresse.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="scott-container">
                                <div className="profile-picture">
                                    <img id="scott-pic" src={scott_pic}/>
                                    <div className="profile-description">
                                        <h1 id="name">Scott Draper</h1>
                                        <p id="profile-description">
                                            Scott is a highly experienced freelance software developer
                                            who specializes in web application development and data
                                            science. The experience he has under his belt has enabled 
                                            him to be an effective web designer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}
export default Home;