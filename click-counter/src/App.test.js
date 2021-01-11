import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("click on increment button increments counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("count remains at or above 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  expect(count).toBe("0");
});

test("click on decrement button decrements counter display", () => {
  const wrapper = setup();
  const incrButton = findByTestAttr(wrapper, "increment-button");
  const decButton = findByTestAttr(wrapper, "decrement-button");
  incrButton.simulate('click');
  decButton.simulate('click');
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("decrement error populates", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  const errorMsg = findByTestAttr(wrapper, "error-message");
  expect(errorMsg.length).toBe(1);
});

test("decrement error clears after increment click", () => {
  const wrapper = setup();
  const decButton = findByTestAttr(wrapper, "decrement-button");
  const incButton = findByTestAttr(wrapper, "increment-button");
  decButton.simulate('click');
  const errorMsg = findByTestAttr(wrapper, "error-message");
  expect(errorMsg.length).toBe(1);
  incButton.simulate('click');
  expect(errorMsg.length).toBe(0);
})