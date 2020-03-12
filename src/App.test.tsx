import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/to do list/i);
  expect(linkElement).toBeInTheDocument();
});
