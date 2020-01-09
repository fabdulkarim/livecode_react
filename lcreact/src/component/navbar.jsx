import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap" 

import { withRouter, Redirect } from "react-router-dom"
import { connect } from "unistore/react"

import { actions } from "../store"

import Logo from "../logo.svg"

class NavigationBar extends Component {
    handleLogOut() {
        this.props.handleInput({"key":"logged_in","value":false});
        console.log(this.props)
        return <Redirect to={{ pathname:"/" }} />
    }

    render() {

        const menu = ["Home", "Profile"];
        const targetUrl = ["/", "/profile"]
        const listMenu = menu.map((menu,index) => {
            return (
                <Nav.Link onClick={() => this.props.history.push( targetUrl[index] )}>{menu}</Nav.Link>
            );
        });
        console.log(this.props)
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img src={Logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>Movie</span>
                    </Navbar.Brand>
                </Nav>                
                <Nav className="ml-auto">
                    {listMenu}
                    {
                        !(this.props.logged_in) ? <Nav.Link onClick={() => this.props.history.push("/login")}>Login</Nav.Link> : <Nav.Link onClick={() => this.handleLogOut()}>Logout</Nav.Link>
                    }
                </Nav>                
            </Navbar>
        )
    }
}

export default connect("logged_in", actions)(withRouter(NavigationBar));
