import { Camera } from 'react-feather';

interface SocialIconProps {
  name: string;
}

const SocialIcon = ({ name }: SocialIconProps): JSX.Element => {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank');
  };
  return (
    <button
      type="button"
      className="p-2 rounded-full ring-4 ring-tangerine-500 ring-opacity-0 hover:ring-opacity-100 transition duration-500 ease-in-out"
    >
      {name}
      <Camera onClick={handleClick} />
    </button>
  );
};

export default SocialIcon;
