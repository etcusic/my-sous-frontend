import React, { Component } from 'react';
import { createSupplies } from '../actions/createSupplies'

class CreateSupplyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "",
          category: "food",
          subCategory: "---",
          unit: ""
        };
  
        this.changeName = this.changeName.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeSubCategory = this.changeSubCategory.bind(this);
        this.changeUnit = this.changeUnit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    changeName(event) {
      this.setState({name: event.target.value});
    }
  
    changeCategory(event) {
        this.setState({category: event.target.value});
      }
  
      changeSubCategory(event) {
        this.setState({subCategory: event.target.value});
      }
  
      changeUnit(event) {
        this.setState({unit: event.target.value});
      }
        
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }
  
    render() {
      return (
        <form onSubmit={event => createSupplies(event, this.props.userId, this.state)}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.changeName} />
          </label>
          
          <label>
            Category:
            <select value={this.state.category} onChange={this.changeCategory}>
                <option value="food">food</option>
            </select>
          </label>
          
          <label>
            Sub Category:
            <select value={this.state.subCategory} onChange={this.changeSubCategory}>
                <option value="---">---</option>
                <option value="produce">produce</option>
                <option value="proteins">proteins</option>
                <option value="dairy">dairy</option>
                <option value="dried goods">dried goods</option>
                <option value="frozen goods">frozen goods</option>
                <option value="condiments">condiments</option>
                <option value="spices">spices</option>
            </select>
          </label>

          <label>
            Unit of Measurement:
            <input type="text" value={this.state.unit} onChange={this.changeUnit} />
          </label>

          <input type="submit" value="Add Supply" />
        </form>
      );
    }
}
  
export default CreateSupplyForm