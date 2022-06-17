import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

const cardProps = {
  id: 1,
  title: 'doggie',
  running: 0,
  updated_at: '2020-10-29 15:53:45',
  mode: 0,
  simulation: 0,
  stock_codes: 'RAIL3',
  strategy: 'RenkoBot',
  initial_capital: 67692.5,
  number_trades: 29,
  daily_balance: 61.15,
  type: 'Normal',
  created_at: '2020-10-29 15:53:45',
  last_paper: {
    robot_id: 1,
    paper: 'WINBG20',
    position: 5,
    type: 0,
    paper_value: 45.55,
    profit: 0,
    id: 0,
    created_at: '2020-10-29 15:53:45',
  },
  movimentations: [
    {
      date: '2020-10-29 15:53:45',
      value: 62.5,
    },
  ],
};

describe('Card component', () => {
  it('should render card', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByTestId('card-component')).toMatchSnapshot();
    expect(screen.getByTestId('card-component')).toBeVisible();
  });
  it('should render title with text-xs class when length is greater than 28 characters', () => {
    render(
      <Card
        {...cardProps}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra sit amet urna id gravida. Fusce nec justo non risus tincidunt porta."
      />,
    );
    expect(screen.getByTestId('header-title')).toHaveClass('text-xs');
  });
  it('should render title with text-base class when length is less than 28 characters', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByTestId('header-title')).toHaveClass('text-base');
  });
   it('should render daily_balance with class text-greenLight', () => {
     render(<Card {...cardProps} />);
     expect(screen.getByTestId('daily-balance')).toHaveClass('text-greenLight');
   });
});
