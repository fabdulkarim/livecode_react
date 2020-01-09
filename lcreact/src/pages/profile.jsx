import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap"

import { withRouter, Redirect } from "react-router-dom"
import { connect } from "unistore/react"

import NavigationBar from "../component/navbar"

class PageProfile extends Component {
    render() {
        if (this.props.logged_in !== true) {
            return <Redirect to={{ pathname:"/login" }} />;
        } else { 
                return (
                <React.Fragment>
                    <NavigationBar />
                    <Container className="text-center" style={{marginTop:"10% auto", padding:"10% auto"}}>
                        <Form style={{width:"40%", border:"2px solid #c6c6c6", padding:"2%"}}>
                            <Form.Group controlId="formUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="username" />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Masuk
                            </Button>
                        </Form>
                    </Container>
                </React.Fragment>
            )
        }
    }
}

export default connect("logged_in")(withRouter(PageProfile));