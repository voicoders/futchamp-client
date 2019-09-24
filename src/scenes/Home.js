import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className="text-center">
						Welcome to the Futchamp app!
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;
