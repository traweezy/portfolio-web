interface Props {
  message?: string;
}

const FieldErrorMessage = ({ message }: Props): JSX.Element => (
  <p className="text-red-400" data-testid="field-error-message">
    {message ? message.charAt(0).toUpperCase() + message.slice(1) : ''}
  </p>
);

FieldErrorMessage.defaultProps = {
  message: '',
};

export default FieldErrorMessage;
