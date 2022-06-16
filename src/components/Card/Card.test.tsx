/* eslint-disable testing-library/render-result-naming-convention */
import '@testing-library/jest-dom';
import { getByTestId, render, screen } from '@testing-library/react';
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
    const componentRendered= render(
      <Card data-testid="card-component" {...cardProps} />,
    );
    expect(componentRendered).toMatchSnapshot();
  });
});
