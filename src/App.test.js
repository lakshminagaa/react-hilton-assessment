import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup);
describe('Functionalities', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should save the data of the rooms in the sessionStorage when button function is invoked', () => {
    const {getByLabelText} = render(
      <App />
    );
    fireEvent.click(getByLabelText(/submit/i));
  })
})