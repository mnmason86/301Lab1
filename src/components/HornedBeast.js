import { Component } from 'react';
// import Image from 'react-bootstrap/Image';

class HornedBeast extends Component {

  constructor(){
    super();
    this.state = {
      votes: 0,
    }
  }

  handleClick = (e) => {
    this.setState({votes: this.state.votes+1});
    console.log(this,this.state.votes);

  }

  render() {
    return(
    <div id="beast-list">
      <h3>{this.props.title}</h3>
      <img alt={this.props.title} title={this.props.title} height='200' width='200' src={this.props.image_url} onClick={this.handleClick}/> 
      <p>{this.props.description}</p>
      <p>&hearts; = {this.state.votes}</p>
    </div>
    )
  }
}

export default HornedBeast;
