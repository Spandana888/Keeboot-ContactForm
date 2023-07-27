import { render, screen } from '@testing-library/react';
import App from './App';

test('render the header in the component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Contact Us/i);
  expect(headerElement).toBeInTheDocument();
});


test('render the subtitle in the component', ()=>{
  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const subtitleElement = getByText(/We love questions and feedback - and we're always happy to help! Here are some ways to conatct us./i);
  expect(subtitleElement).toBeInTheDocument();
})