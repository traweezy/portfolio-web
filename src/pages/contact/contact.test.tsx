import { screen, cleanup, fireEvent } from '@testing-library/react';
import { renderWithClient } from '../../services/testing-utils';

import Contact from './index';

const headerTestId = 'form-header';
const nameInputTestId = 'form-input-email';
const emailInputTestId = 'form-input-name';
const subjectInputTestId = 'form-input-subject';
const messageInputTestId = 'form-input-message';
const submitButtonInputTestId = 'form-submit-button';

describe('Given <FieldErrorMessage />', () => {
  afterEach(() => {
    cleanup();
  });

  describe('When rendered', () => {
    beforeEach(() => {
      renderWithClient(<Contact />);
    });

    it('Should render the basic fields', () => {
      const headerEl = screen.getByTestId(headerTestId);
      const nameInputEl = screen.getByTestId(nameInputTestId);
      const emailInputEl = screen.getByTestId(emailInputTestId);
      const subjectInputEl = screen.getByTestId(subjectInputTestId);
      const messageInputEl = screen.getByTestId(messageInputTestId);
      const submitButtonInputEl = screen.getByTestId(submitButtonInputTestId);

      expect(headerEl).toBeInTheDocument();
      expect(nameInputEl).toBeInTheDocument();
      expect(emailInputEl).toBeInTheDocument();
      expect(subjectInputEl).toBeInTheDocument();
      expect(messageInputEl).toBeInTheDocument();
      expect(submitButtonInputEl).toBeInTheDocument();
    });
  });

  describe('When form is submitted with empty fields', () => {
    beforeEach(() => {
      renderWithClient(<Contact />);
    });

    it('Should fail validation', async () => {
      fireEvent.submit(screen.getByTestId('form-submit-button'));
      expect(await screen.findAllByTestId('field-error-message')).toHaveLength(
        4,
      );
    });
  });
});

describe('When form is submitted with an invalid email in email field', () => {
  beforeEach(() => {
    renderWithClient(<Contact />);
  });

  it('Should validate invalid email for email field', async () => {
    const nameInputEl = screen.getByTestId(nameInputTestId);
    const emailInputEl = screen.getByTestId(emailInputTestId);
    const subjectInputEl = screen.getByTestId(subjectInputTestId);
    const messageInputEl = screen.getByTestId(messageInputTestId);

    fireEvent.input(nameInputEl, {
      target: { value: 'test name' },
    });

    fireEvent.input(subjectInputEl, {
      target: { value: 'test subject' },
    });

    fireEvent.input(messageInputEl, {
      target: { value: 'test message' },
    });

    fireEvent.input(emailInputEl, {
      target: { value: 'invalid email' },
    });

    fireEvent.submit(screen.getByTestId('form-submit-button'));
    expect(await screen.findAllByTestId('field-error-message')).toHaveLength(1);
  });
});
