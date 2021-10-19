import LinkButton from '../../components/link-button';
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
        <LinkButton onClick={() => downloadResume()}>Resume</LinkButton>
        <LinkButton onClick={() => handleGithubClick()}>Github</LinkButton>
      </div>
    </div>
  );
};

export default About;
