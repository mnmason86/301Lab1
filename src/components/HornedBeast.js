import { Component } from 'react';

class HornedBeast extends Component {
  constructor(props) {
    super();
  }
    render(){
      return(
        <div className="horned-beast">
          <h2>{this.props.title}</h2>
          <img 
          src={this.props.imageUrl} 
          alt={this.props.alt} 
          title={this.props.title} />
          <p>{this.props.desc}</p>
        </div>
      )
    }
  };

export default HornedBeast;

