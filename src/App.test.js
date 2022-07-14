import { render, screen } from '@testing-library/react';
import ReactJSApp from "./App";

test('renders learn react link', () => {
  render(<ReactJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
