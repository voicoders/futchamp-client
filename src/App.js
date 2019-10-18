import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark" >
					<Container>
						<Nav>
							<Nav.Item>
								<NavLink className="nav-link" to="/">FutChamp</NavLink>
							</Nav.Item>
						</Nav>
						<Nav className="justify-content-end" variant="pills">
							<Nav.Item>
								<NavLink className="nav-link" to="/login">
									Log in
								</NavLink>
							</Nav.Item>
							<Nav.Item>
								<NavLink className="nav-link" to="/login">
									Sign in
								</NavLink>
							</Nav.Item>
						</Nav>
					</Container>
				</Navbar>
				<Container fluid>
					<Route exact path="/home" component={Home} />
					<Route path="/login" component={Login} />
				</Container>
			</>
		);
	}
}

export default App;
