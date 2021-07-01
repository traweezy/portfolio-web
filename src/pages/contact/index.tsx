import React from 'react';

const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-full h-full align-middle">
      <div className="my-10 text-3xl font-extrabold text-center text-black">
        Contact Me
      </div>
      <form className="w-full max-w-4xl mx-auto">
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase"
              htmlFor="grid-first-name"
            >
              name
              <input
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="grid-first-name"
                type="text"
              />
            </label>
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase"
              htmlFor="grid-last-name"
            >
              email
              <input
                className="block w-full px-4 py-3 mt-2 leading-tight border border-gray-200 rounded appearance-none"
                id="grid-last-name"
                type="email"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase"
              htmlFor="grid-password"
            >
              subject
              <input
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border border-gray-200 rounded appearance-none"
                id="grid-password"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6">
            <label
              className="block mb-2 text-xs font-bold tracking-wide uppercase"
              htmlFor="grid-city"
            >
              message
              <textarea
                className="block w-full px-4 py-3 mt-1 mt-2 leading-tight border border-gray-200 rounded appearance-none resize form-textarea"
                rows={10}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
