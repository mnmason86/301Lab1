import { Component } from 'react';
// import Image from 'react-bootstrap/Image';

class HornedBeast extends Component {
  render() {
    return(
    <div id="beast-list">
    {this.props.beasts.map(beast => <img alt='' height='300' width='300' src={beast.image_url} onClick={() => this.props.selectBeast(beast)}/>)}
   
    </div>
    )
  }
}

export default HornedBeast;
