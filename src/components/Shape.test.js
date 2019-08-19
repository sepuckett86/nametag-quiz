import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <Shape 
        color="#000000"
        backgroundColor="#000000"
        text="Some text here"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
