import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";


class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

    }

    Counter(e) {
        this.setState({counter: parseFloat(e.target.value)})
    }

    render() {
        //console.log(this.state.counter);
        return (
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col md={6} className="d-flex">
                            <Button variant="danger"
                                    onClick={() => this.setState({counter: this.state.counter - 1})}>Subtract</Button>
                            <Form.Control type="text" onChange={(e) => this.Counter(e)} placeholder="Counter"
                                          className="mx-2"/>
                            <Button variant="success" className="px-4"
                                    onClick={() => this.setState({counter: this.state.counter + 1})}>Add</Button>
                        </Col>
                        <p className="lead">{this.state.counter}</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Body;
