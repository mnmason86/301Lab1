import { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import {Container, Row, Col} from 'react-bootstrap';


class Main extends Component {

  render(){
    return(
      <Container fluid id='main'>
        <Row sm={1} md={2} lg={3}>
            {this.props.list.map(beast =>
            <Col >
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description} 
                handleShowModal={this.props.handleShowModal}
                />
            </Col>
              )}
           
          </Row>
      </Container>
    )
  }
}
export default Main;

