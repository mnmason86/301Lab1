import { Component } from 'react';
import Form from 'react-bootstrap/Form';


class HornForm extends Component{

  filter = (e) => {
    let hornNumber = parseInt(e.target.value);
    let beastEmporium = this.props.list;
    if (hornNumber){
      beastEmporium = this.props.list.filter(beast => beast.horns === hornNumber); 
    }
    this.props.updateBeastEmporium(beastEmporium);
  }

  render() {
    return (
      <Form id='horn-form'>
          <Form.Label id='form-label'>Choose Beasts by Number of Horns</Form.Label>
          <Form.Select id= 'form-select' as="select" onChange={this.filter}>
            <option value="">Any amount of Horns</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">All the Horns!!!</option>
          </Form.Select>
      </Form>
    )
  }
};

export default HornForm;