import Todo from '../app/todo';
import TestUtils from "react-addons-test-utils";
import React from 'react';

test('Todo component renders the todo correctly', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const renderer = TestUtils.createRenderer();
  renderer.render(
      <Todo todo={todo} />
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
