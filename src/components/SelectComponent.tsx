import React, { Component, ChangeEvent, MouseEvent } from 'react';
import CSS from 'csstype';

const selectDiv: CSS.Properties = {
  margin: '20px'
}

const dropdown: CSS.Properties = {
  margin: '10px',
  width: '200px',
  height: '30px',
  borderRadius: '5px',
}

const button: CSS.Properties = {
  margin: '10px'
}

interface SelectProps {
  options: string[];
  selectedItems: string[];
  updateList: Function;
}

var currentSelection: string;

export class SelectComponent extends Component<SelectProps, {}> {
  constructor(props: any) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event: ChangeEvent<HTMLSelectElement>) {
    currentSelection = event.target.value;
  }

  clickHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.selectedItems.push(currentSelection);
    this.props.updateList(this.props.selectedItems);
  }
  
  render() {
    let optionItems = this.props.options.map((optionItem, index) =>
        <option>{optionItem}</option>
      );
    
    return (
      <form id="SelectForm">
        <div style={selectDiv}>
          <select style={dropdown} onChange={this.changeHandler}>
            <option selected disabled hidden></option>
            {optionItems}
          </select>
          <br />
          <button style={button} id="AddButton" type="submit" onClick={this.clickHandler}>Add to list</button>
        </div>
      </form>
    );
  }
}
