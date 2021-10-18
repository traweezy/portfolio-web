import downloadResume from '../../services/download-resume';

const About = (): JSX.Element => {
  const handleGithubClick = (): void =>
    window.open('https://github.com/traweezy', '_blank')?.focus();

  return (
    <div className="text-lg">
      <p className="pb-4">
        My name is Tyler Schumacher, I am a full stack web developer, with over
        6 years of experience. I’ve worked for primarily for large financial
        institutions and fintech companies creating both public facing web
        application and internal tooling, while keep working on side projects on
        my own time.
      </p>
      <p className="pb-4">
        I focus on working with creating UI&apos;s that look beautiful and
        UX&apos;s patterns that make sense, while working with realtime data.
        Also creating server side code that is scalable and powerful.
      </p>
      <div className="flex flex-row">
        <button
          type="button"
          className="px-6 py-3 mr-4 text-base font-bold text-white rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200"
          onClick={() => downloadResume()}
        >
          Resume
        </button>
        <button
          type="button"
          className="px-6 py-3 mr-4 text-base font-bold text-white rounded-lg focus:border-tangerine-500 focus:ring-1 focus:ring-tangerine-500 focus:border-none bg-tangerine-500 hover:bg-tangerine-600 duration-200"
          onClick={() => handleGithubClick()}
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default About;
