import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <ColorSelector 
        color="#000000"
        backgroundColor="#000000"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
