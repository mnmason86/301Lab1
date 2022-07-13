import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends Component {

  constructor(props){
    super(props);
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
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={this.props.image_url} id='url'/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Current Votes: {this.state.votes}</Card.Text>
          <Button variant="primary" onClick={this.handleClick}>&hearts; Vote for this Beast</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
