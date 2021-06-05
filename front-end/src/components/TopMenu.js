import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
    render() {
        return (
            <Menu style={{marginTop: "0px", backgroundColor: "#61dafb"}}>
                <Menu.Item>
                    <Link to={{ pathname: "/"}}>
                        <button id="TopBarButton">
                            Home
                        </button>
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={{ pathname: "/Explore"}}>
                        <button id="TopBarButton">
                            Explore
                        </button>
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={{ pathname: "/About"}}>
                        <button id="TopBarButton">
                            About
                        </button>
                    </Link>
                </Menu.Item>

                <Menu.Item position="right">
                    <h1>
                        S Q U I N C H N E T
                    </h1>
                </Menu.Item>
            </Menu>
        );
    }
}