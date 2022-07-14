import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import HornForm from './components/HornForm';
import SelectedBeast from './components/SelectedBeast.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      list: list,
      selectedBeast: {},
      showModal: false,
    }
  }

  handleShowModal = (beastName) => {
    const selectedBeast = list.find(beast => beast.title === beastName);
    this.setState({showModal: true, selectedBeast: selectedBeast});
    console.log(selectedBeast.description);
  };

  handleExitModal = () => {
    this.setState({showModal: false});
  };

  updateBeastEmporium = (filterList) => {
    this.setState({list: filterList});
  }

  hornNumber = (e) => {
    e.preventDefault();
    this.setState({ Horns: e.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <HornForm list={list} updateBeastEmporium={this.updateBeastEmporium} />
        <Main 
          list={this.state.list}
          handleShowModal={this.handleShowModal}
        />
        <SelectedBeast 
          show = {this.state.showModal}
          handleExit = {this.handleExitModal}
          selectedBeast = {this.state.selectedBeast}
        />
        <Footer />
      </div>
    
    );
  }
}

export default App;
