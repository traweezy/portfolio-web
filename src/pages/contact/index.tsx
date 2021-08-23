import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FieldErrorMessage from './components/field-error-message';

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const Contact = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormInput> = data => data;

  return (
    <div className="flex flex-col justify-center w-full h-full p-6 align-middle">
      <div className="my-10 text-3xl font-extrabold text-center text-">
        Contact Me
      </div>
      <form
        className="w-full max-w-4xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-base font-bold tracking-wide capitalize "
              htmlFor="form-first-name"
            >
              name
              <input
                {...register('name')}
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-first-name"
                type="text"
              />
            </label>
            <FieldErrorMessage message={errors.name?.message} />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-base font-bold tracking-wide capitalize"
              htmlFor="form-last-name"
            >
              email
              <input
                {...register('email')}
                className="block w-full px-4 py-3 mt-2 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-last-name"
                type="email"
              />
            </label>
            <FieldErrorMessage message={errors.email?.message} />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-base font-bold tracking-wide capitalize"
              htmlFor="form-subject"
            >
              subject
              <input
                {...register('subject')}
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-subject"
                type="text"
              />
            </label>
            <FieldErrorMessage message={errors.subject?.message} />
          </div>
        </div>
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6">
            <label
              className="block mb-2 text-base font-bold capitalize tracking-wid e"
              htmlFor="form-message"
            >
              message
              <textarea
                {...register('message')}
                id="form-message"
                className="block w-full px-4 py-3 mt-2 leading-tight border border-gray-200 rounded appearance-none resize transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-textarea"
                rows={10}
              />
            </label>
            <FieldErrorMessage message={errors.message?.message} />
          </div>
        </div>
        <button
          type="submit"
          className="float-right w-full px-6 py-3 text-base font-bold text-black rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
