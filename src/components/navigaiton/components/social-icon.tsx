import React from 'react';
import { Camera } from 'react-feather';

interface SocialIconProps {
  name: string;
}

const SocialIcon = ({ name }: SocialIconProps): JSX.Element => {
  const handleClick = () => {
    // window.open('https://www.google.com', '_blank');
    console.log(name);
  };
  return (
    <button
      type="button"
      className="p-2 rounded-full ring-4 ring-tangerine ring-opacity-0 hover:ring-opacity-50 transition duration-500 ease-in-out"
      //   href="https://twitter.com"
      //   target="_blank"
      //   rel="noreferrer"
    >
      <Camera onClick={handleClick} />
    </button>
  );
};

export default SocialIcon;
