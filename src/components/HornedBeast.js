import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class HornedBeast extends Component {

  constructor(){
    super();
    this.state = {
      votes: 0,
    }
  }

  handleClick = () => {
    this.setState({votes: this.state.votes+1});
    console.log(this,this.state.votes);
  }

  render() {
    return(
      <Container>
        <Col med={2}>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>Current Votes: {this.state.votes}</Card.Text>
              <Button variant="primary" onClick={this.handleClick}>&hearts; Vote for this Beast</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default HornedBeast;
