import React, { Component } from 'react';
import { SelectComponent } from './components/SelectComponent';
import { ListComponent } from './components/ListComponent';
import CSS from 'csstype';

const mainDiv: CSS.Properties = {
  margin: '20px'
}

interface State {
  selectedItems: string[];
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItems: []
    }
    this.updateList = this.updateList.bind(this);
  }

  updateList(selectedItems: string[]) {
    this.setState({selectedItems});
  }
    
  render() {
    return (
      <div style={mainDiv}>
        <SelectComponent options={["Cyan", "Magenta", "Yellow", "Black"]} selectedItems={this.state.selectedItems} updateList={this.updateList} />
        <ListComponent selectedItems={this.state.selectedItems} updateList={this.updateList} />
      </div>
    );
  }
}

export default App;
