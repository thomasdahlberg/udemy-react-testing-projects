import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { secretWord: 'party' }
  checkProps(Input, expectedProps);
});