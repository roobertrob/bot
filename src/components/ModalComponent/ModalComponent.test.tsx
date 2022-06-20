import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ModalComponent } from '.';

describe('Card component', () => {
  it('should render modal', () => {
    render(<ModalComponent modalOpen />);
    expect(screen.getByRole('dialog')).toMatchSnapshot();
    expect(screen.getByRole('dialog')).toBeVisible();
  });
});
