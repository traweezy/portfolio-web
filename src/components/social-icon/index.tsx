import { GitHub, Mail, Download } from 'react-feather';
import downloadResume from '../../services/download-resume';

type SocialIconName = 'gitHub' | 'email' | 'resume';

interface SocialIconProps {
  name: SocialIconName;
  url?: string;
}

const SocialIcon = ({ name, url }: SocialIconProps): JSX.Element => {
  const handleClick = (): void => window.open(url, '_blank')?.focus();

  const icons: Record<SocialIconName, JSX.Element> = {
    gitHub: <GitHub onClick={() => handleClick()} />,
    email: <Mail onClick={() => handleClick()} />,
    resume: <Download onClick={() => downloadResume()} />,
  };

  return (
    <button
      name={name}
      type="button"
      className="p-2 mr-2 rounded-full ring-4 ring-bills-red-600 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out"
    >
      {icons[name]}
    </button>
  );
};

SocialIcon.defaultProps = {
  url: '',
};

export default SocialIcon;
