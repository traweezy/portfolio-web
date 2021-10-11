import { GitHub, Linkedin } from 'react-feather';

type SocialIconName = 'gitHub' | 'linkedin';

interface SocialIconProps {
  name: SocialIconName;
}

const SocialIcon = ({ name }: SocialIconProps): JSX.Element => {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const icons: Record<SocialIconName, JSX.Element> = {
    gitHub: <GitHub onClick={handleClick} />,
    linkedin: <Linkedin onClick={handleClick} />,
  };

  return (
    <button
      name={name}
      type="button"
      className="p-2 rounded-full ring-4 ring-tangerine-500 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out"
    >
      {icons[name]}
    </button>
  );
};

export default SocialIcon;
