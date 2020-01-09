import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"

import NavigationBar from "../component/navbar"

class PageHome extends Component {
    handleClink(e) {
        e.preventDefault();
        this.props.history.push()
    }
    render() {
        const listImage = ["https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"]
        const listCategory = ["Romance","Action","Fiction","Comedy"]

        const categoryColumn = listCategory.map((category, index) => {
            return (
                <Col md="3">
                    <div className="h4 text-center">{category}</div>
                    <img src={listImage[index]} style={{ maxHeight: "300px", border:"solid 1px #ececec", borderRadius:"2px"}} alt=""></img>
                    <div className="text-center" style={{ padding:"1%"}}>
                        <Button onClick={e => this.props.history.push("/" + category)} variant="primary">See Movies</Button>
                    </div>
                </Col>
            )
        })
        console.log(listCategory[0])
        return (
            <React.Fragment>
                <NavigationBar handleNav="" handleAuth="" />
                <Container style={{ padding: "2% 10%"}}>
                    <Row>
                        { categoryColumn }
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default PageHome;