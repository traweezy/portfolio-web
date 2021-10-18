import { GitHub, Linkedin, Mail, Download } from 'react-feather';
import downloadResume from '../../services/download-resume';

type SocialIconName = 'gitHub' | 'linkedin' | 'email' | 'resume';

interface SocialIconProps {
  name: SocialIconName;
  url?: string;
}

const SocialIcon = ({ name, url }: SocialIconProps): JSX.Element => {
  const handleClick = (): void => window.open(url, '_blank')?.focus();

  const icons: Record<SocialIconName, JSX.Element> = {
    gitHub: <GitHub onClick={() => handleClick()} />,
    linkedin: <Linkedin onClick={() => handleClick()} />,
    email: <Mail onClick={() => handleClick()} />,
    resume: <Download onClick={() => downloadResume()} />,
  };

  return (
    <button
      name={name}
      type="button"
      className="p-2 mr-2 rounded-full ring-4 ring-tangerine-500 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out"
    >
      {icons[name]}
    </button>
  );
};

export default SocialIcon;
