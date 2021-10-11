// import { Radar } from 'react-chartjs-2';

import avatar from './avatar-hex.png';

const Hero = (): JSX.Element => (
  <div className="h-screen grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-1 md:gap-0 lg:gap-12">
    <div className="flex items-center col-span-2">
      <img
        src={avatar}
        alt="Tyler Schumacher"
        className="flex items-center justify-center mx-auto"
      />
    </div>
    <div className="flex flex-col justify-center text-black col-span-4">
      <div className="mb-4 text-3xl">
        Hello there, I am{' '}
        <span className="text-tangerine-500">Tyler Schumacher</span>
      </div>
      <p className="mb-2 text-xl ">
        I&apos;m a{' '}
        <span className="text-tangerine-500">full stack web developer </span>
        passionate about creating beautiful UIs, intuitive UX patterns, and
        scalable backends.
      </p>
    </div>
  </div>
);

export default Hero;
