import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createSupplies } from '../actions/createSupplies'

class CreateSupplyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {                               
          name: props.supply.name, //"",
          category: props.supply.category, //"food",
          sub_category: props.supply.sub_category, //"---",         
          unit: props.supply.unit //""
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
        this.setState({sub_category: event.target.value});
      }
  
      changeUnit(event) {
        this.setState({unit: event.target.value});
      }

      handleSubmit = event => {
        event.preventDefault()
        let supply = Object.assign({}, this.state)
        supply["user_id"] = this.props.userId
        this.props.createSupplies(supply)
        this.resetForm()
      }

      resetForm = () => {
        this.setState({
            name: "",
            category: "food",
            sub_category: "---",
            unit: ""
        })
      }
  
    render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
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
            <select value={this.state.sub_category} onChange={this.changeSubCategory}>
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
  
const mapStateToProps = state => {
    return {
        userId: state.user.id
    }
  }
 
export default connect(mapStateToProps, { createSupplies })(CreateSupplyForm)