import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumb } from '.';

const navigateTo = jest.fn();

describe('Breadcrumb component', () => {
  it('should render Breadcrumb', () => {
    render(
      <Breadcrumb
        navigateTo={navigateTo}
        items={[
          {
            children: 'Analise Geral',
            link: '/',
          },
          {
            children: 'Principal',
            link: '/',
          },
        ]}
      />,
    );
    expect(screen.getByTestId('breadcrumb-component')).toMatchSnapshot();

    expect(screen.getByTestId('breadcrumb-component')).toBeInTheDocument();

    expect(screen.getByTestId('breadcrumb-component')).toBeVisible();

    userEvent.click(screen.getByTestId('breadcrumb-first-item'));
    expect(navigateTo).toHaveBeenCalled();

    expect(
      screen.getByTestId('breadcrumb-last-item').className.includes('ml-4'),
    ).toBeTruthy();

    expect(
      screen.getByTestId('breadcrumb-first-item').className.includes('mr-4'),
    ).toBeTruthy();
  });
  it('should not click in the item without link', () => {
    render(
      <Breadcrumb
        navigateTo={navigateTo}
        items={[
          {
            children: 'Page 1',
            link: '/page-1',
          },
          {
            children: 'Page 2',
          },
        ]}
      />,
    );
    userEvent.click(screen.getByText('Page 2'));
    expect(navigateTo).not.toBeCalled();
  });
  it('should call function navigateTo once', () => {
    const { getByText } = render(
      <Breadcrumb
        navigateTo={navigateTo}
        items={[
          {
            children: 'Index',
            link: '/test',
          },
          {
            children: 'Page',
            link: '/test/page',
          },
          {
            children: 'Page 2',
            link: '/test/page/page-2',
          },
          {
            children: 'Current item',
          },
        ]}
        data-testid="breadcrumb"
      />,
    );

    userEvent.click(screen.getByText('Page 2'));
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
});
