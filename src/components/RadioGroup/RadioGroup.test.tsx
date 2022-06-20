import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroupComponent } from '.';

const options = [
  {
    id: 0,
    name: 'Tangran',
  },
  {
    id: 1,
    name: 'Price Action',
  },
];
const selected = {
  id: 1,
  name: 'Price Action',
};
const handleChangeSelected = jest.fn()

describe('Radio Group component', () => {
  it('should render Radio Group', () => {
    render(
      <RadioGroupComponent
        options={options}
        selected={selected}
        onChange={handleChangeSelected}
      />,
    );
    expect(screen.getByTestId('radio-group-component')).toMatchSnapshot();
  });
  it('should call function handleChangeSelected when user clicks', () => {
    render(
      <RadioGroupComponent
        options={options}
        selected={selected}
        onChange={handleChangeSelected}
      />,
    );
    userEvent.click(screen.getByText('Price Action'));
    expect(handleChangeSelected).not.toHaveBeenCalled();
    userEvent.click(screen.getByText('Tangran'));
    expect(handleChangeSelected).toHaveBeenCalled();
  });
});
