const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center w-full h-full p-6 align-middle">
      <div className="my-10 text-3xl font-extrabold text-center text-">
        Contact Me
      </div>
      <form className="w-full max-w-4xl mx-auto">
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-base font-bold tracking-wide"
              htmlFor="form-first-name"
            >
              Name
              <input
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-first-name"
                type="text"
              />
            </label>
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-base font-bold tracking-wide"
              htmlFor="form-last-name"
            >
              Email
              <input
                className="block w-full px-4 py-3 mt-2 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-last-name"
                type="email"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-base font-bold tracking-wide"
              htmlFor="form-password"
            >
              Subject
              <input
                className="block w-full px-4 py-3 mt-2 mb-3 leading-tight border border-gray-200 rounded appearance-none transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-input"
                id="form-password"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap mb-2 -mx-3">
          <div className="w-full px-3 mb-6">
            <label
              className="block mb-2 text-base font-bold tracking-wide"
              htmlFor="form-message"
            >
              Message
              <textarea
                id="form-message"
                className="block w-full px-4 py-3 mt-2 leading-tight border border-gray-200 rounded appearance-none resize transition duration-200 ease-in-out focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none form-textarea"
                rows={10}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="float-right w-full px-6 py-3 text-base font-bold text-black rounded-lg bg-tangerine-500 hover:bg-tangerine-600 duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
