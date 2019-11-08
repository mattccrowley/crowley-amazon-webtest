import React, { Component } from 'react';
import CSS from 'csstype';

const listDiv: CSS.Properties = {
  margin: '30px'
}

const list: CSS.Properties = {
  listStyleType: 'none',
  border: '1px solid darkgrey',
  width: '200px',
  height: '100px',
  padding: '0px',
  borderRadius: '5px',
  display: 'table'
}

const listEntry: CSS.Properties = {
  margin: '5px'
}

const button: CSS.Properties = {
  float: 'right'
}

interface ListProps {
  selectedItems: string[];
  updateList: Function;
}

export class ListComponent extends Component<ListProps, {}> {
  constructor(props: any) {
    super(props);
    this.removeListItem = this.removeListItem.bind(this);
  }
  
  removeListItem(i: number) {
    this.props.selectedItems.splice(i, 1);
    this.props.updateList(this.props.selectedItems);
  }
  
  render() {
    let listItems;

    if (this.props.selectedItems) {
      listItems = this.props.selectedItems.map((listItem, index) =>
        <li style={listEntry}>{listItem}<button style={button} onClick={() => this.removeListItem(index)}>Delete</button></li>
      );
    }
    
    return (
      <div style={listDiv}>
        <ul style={list}>
          {listItems}
        </ul>
      </div>
    );
  }
}
