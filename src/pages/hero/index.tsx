// import { Radar } from 'react-chartjs-2';

import Avatar from '../../assets/tyler-schumacher-bw.jpg';

const Hero = (): JSX.Element => (
  <div className="h-screen grid grid-cols-1 xl:grid-cols-7 sm:grid-cols-1 xl:gap-0">
    <div className="flex items-end xl:items-center col-span-3">
      <img
        src={Avatar}
        alt="Tyler Schumacher"
        className="flex items-center justify-center max-w-xs mx-auto mb-8 rounded-full xl:-mb-10 2xl:max-w-sm md:shadow-hero"
      />
    </div>
    <div className="flex flex-col text-center text-black xl:text-left xl:justify-center col-span-4">
      <div className="mb-4 text-3xl">
        Hello there, <br />I am
        <span className="text-tangerine-600"> Tyler Schumacher</span>
      </div>
      <p className="mb-2 text-xl ">
        I&apos;m a{' '}
        <span className="text-tangerine-600">full stack web developer </span>
        passionate about creating beautiful UIs, intuitive UX patterns, and
        scalable backends.
      </p>
    </div>
  </div>
);

export default Hero;
