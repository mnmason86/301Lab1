import { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      beastList: list,
    }
  }

  render(){
    return(
      <Container fluid id='main'>
        <Row sm={1} md={2} lg={3}>
            {this.state.beastList.map(beast =>
            <Col >
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description} />
            </Col>
              )}
           
          </Row>
      </Container>
    )
  }
}
export default Main;

