import { render, screen, cleanup } from '@testing-library/react';
import FieldErrorMessage from './field-error-message';

describe('Given <FieldErrorMessage />', () => {
  const testId = 'field-error-message';
  let message: string | undefined;
  let expectedMessage: string;

  afterEach(() => {
    cleanup();
  });

  describe('When given a valid message', () => {
    beforeEach(() => {
      message = 'marklar';
      expectedMessage = 'Marklar';
      render(<FieldErrorMessage message={message} />);
    });
    it('Should display capitalized as message', () => {
      const navItem = screen.getByTestId(testId);
      expect(navItem).toBeInTheDocument();
      expect(navItem).toHaveTextContent(expectedMessage);
    });
  });

  describe('When given no message', () => {
    beforeEach(() => {
      message = undefined;
      expectedMessage = '';
      render(<FieldErrorMessage message={message} />);
    });
    it('Should not display a message', () => {
      const navItem = screen.getByTestId(testId);
      expect(navItem).toHaveTextContent(expectedMessage);
    });
  });
});
