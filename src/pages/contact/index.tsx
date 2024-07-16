import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FieldErrorMessage from './components/field-error-message';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  text: yup.string().required(),
});

const Contact = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Email>({
    resolver: yupResolver(schema),
  });

  const formatSubmitData = (
    emailData: Omit<Email, 'to'>,
  ): Omit<Email, 'name' | 'email'> => {
    const { name, email, ...rest } = emailData;
    return {
      ...rest,
      from: email,
      subject: `${emailData.name} - ${emailData.subject}`,
      to: 'tyschumacher@proton.me',
    };
  };

  const onSubmit: SubmitHandler<Omit<Email, 'to'>> = data => {
    const formattedData = formatSubmitData(data);
    const mailtoLink = `mailto:
     tyschumacher@proton.me?subject=${encodeURIComponent(
       formattedData.subject,
     )}&body=${encodeURIComponent(`Message: ${formattedData.text}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form
      className="w-full max-w-4xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full pr-0 mb-6 md:pr-3 md:w-1/2 md:mb-0">
          <label
            className="block mb-2 text-base font-bold tracking-wide capitalize"
            htmlFor="form-name"
          >
            name
            <input
              {...register('name')}
              data-testid="form-input-name"
              className="block w-full py-3 pr-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none form-input"
              id="form-name"
              type="text"
            />
          </label>
          {errors.name?.message ? (
            <FieldErrorMessage message={errors.name.message} />
          ) : null}
        </div>
        <div className="w-full md:w-1/2">
          <label
            className="block mb-2 text-base font-bold tracking-wide capitalize"
            htmlFor="form-email"
          >
            email
            <input
              {...register('email')}
              data-testid="form-input-email"
              className="block w-full py-3 pl-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none form-input"
              id="form-email"
              type="email"
            />
          </label>
          {errors.email?.message ? (
            <FieldErrorMessage message={errors.email.message} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full">
          <label
            className="block mb-2 text-base font-bold tracking-wide capitalize"
            htmlFor="form-subject"
          >
            subject
            <input
              {...register('subject')}
              data-testid="form-input-subject"
              className="block w-full py-3 mt-2 mb-3 leading-tight text-black border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none form-input"
              id="form-subject"
              type="text"
            />
          </label>
          {errors.subject?.message ? (
            <FieldErrorMessage message={errors.subject.message} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap mb-2 -mx-3">
        <div className="w-full mb-6">
          <label
            className="block mb-2 text-base font-bold capitalize tracking-wid e"
            htmlFor="form-message"
          >
            message
            <textarea
              {...register('text')}
              data-testid="form-input-message"
              id="form-message"
              className="block w-full py-3 mt-2 leading-tight text-black border border-gray-200 rounded appearance-none resize transition duration-200 ease-in-out focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none form-textarea"
              rows={10}
            />
          </label>
          {errors.text?.message ? (
            <FieldErrorMessage message={errors.text.message} />
          ) : null}
        </div>
      </div>
      <button
        data-testid="form-submit-button"
        type="submit"
        className="float-right w-full px-6 py-3 text-base font-bold text-white rounded-lg hover:bg-bills-red-400 focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none bg-bills-red-600 duration-200"
      >
        SEND
      </button>
    </form>
  );
};
export default Contact;
