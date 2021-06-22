import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
    render() {
        return (
            <div className="top-bar">
                <Link to={{ pathname: "/"}}>
                    <button id="TopBarButton">
                        Home
                    </button>
                </Link>

                <Link to={{ pathname: "/Explore"}}>
                    <button id="TopBarButton">
                        Explore
                    </button>
                </Link>

                <Link to={{ pathname: "/About"}}>
                    <button id="TopBarButton">
                        About
                    </button>
                </Link>

                <Link to={{ pathname: "/"}}>
                    <button id="TopBarButton">
                        Products & Pricing
                    </button>
                </Link>

                <Link to={{ pathname: "/"}}>
                    <button id="TopBarButton">
                        Contact Us
                    </button>
                </Link>
            </div>

            
        );
    }
}