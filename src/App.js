import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import SelectedBeast from '.components/SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      beastList: list,
      selectedBeast: {},
      showModal: false,
    }
  }

  handleShowModal = (beastName) => {
    const selectedBeast = list.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast})
  };

  handleExitModal = () => {
    this.setState({showModal: false});
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Main 
          beastList={this.state.beastList}
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast 
          show = {this.state.showModal}
          handleExit = {this.state.handleExitModal}
          selectedBeast = {this.state.selectedBeast}
        />
        <Footer />
      </div>
    
    );
  }
}

export default App;
