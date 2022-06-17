import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ModalComponent } from '.';

describe('Card component', () => {
  it('should render modal', () => {
    render(<ModalComponent modalOpen />);
      expect(screen.getByRole('dialog')).toMatchSnapshot();
       expect(screen.getByRole('dialog')).toBeVisible();
  });
    it('should change options', () => {
        const handleCreateRobot = jest.fn()
        
      render(<ModalComponent modalOpen />);
      screen.getByText('Criar robô');

    expect(screen.getByRole('dialog')).toBeVisible();
  });
  
});
