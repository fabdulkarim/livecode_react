import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"

import NavigationBar from "../component/navbar"

class PageCategory extends Component {
    componentDidMount = async () => {
        let cat = this.props.match.params.cat;
        await this.props.reload(cat);
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar handleNav="" handleAuth="" />
                <Container style={{ padding: "2% 10%"}}>
                    <div className="h1 text-center className">Percobaan</div>
                </Container>
            </React.Fragment>
        )
    }
}

export default PageCategory;