import { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast.js';
// import Results from './Results.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentBeast: null,
      beastList: list,
    }
  }

  selectCurrentBeast = (beast) => {
    this.setState({currentBeast: beast});
  }

  render(){
    console.log(this.state.currentBeast);
    return(
      <div id='main'>
        {/* <Results currentBeast={this.state.currentBeast}/> */}
        <HornedBeast beasts={this.state.beastList} selectBeast={this.selectCurrentBeast} />
      </div>
    )
  }
}
export default Main;
