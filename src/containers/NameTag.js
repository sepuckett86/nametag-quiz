import React, { Component } from 'react';
import Shape from '../components/Shape';
import ColorSelector from '../components/ColorSelector';
import TextSelector from '../components/TextSelector';

export default class NameTag extends Component {
  state = {
    color: '#000000',
    backgroundColor: '#ffe0f8',
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    const { text, color, backgroundColor } = this.state;
    return (
      <>
      <TextSelector text={text} handleChange={this.handleChange}/>
      <ColorSelector color={color} backgroundColor={backgroundColor} handleChange={this.handleChange}/>
      <Shape 
        color={color} 
        backgroundColor={backgroundColor}
        text={text}
      />
      </>
    );
  }
}
