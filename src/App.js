import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark" >
					<Container>
						<Navbar.Brand>FutChamp</Navbar.Brand>
						<Nav className="justify-content-end">
							<Nav.Item>
								<Nav.Link>
									Log in
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									Sign in
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Container>
				</Navbar>
				<Container>
					<Row>
						<Col className="text-center">
							Welcome to the Futchamp app!
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
