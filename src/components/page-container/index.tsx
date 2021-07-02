import { ReactChild, ReactChildren } from 'react';
import Particles from 'react-particle-backgrounds';

const settings: ParticleBackgroundConfig = {
  particle: {
    particleCount: 100,
    color: '#ffb75f',
    minSize: 2,
    maxSize: 4,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 30,
    minSpeed: 0.2,
    maxSpeed: 2,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.5,
    opacityTransitionTime: 5000,
  },
};

interface PageContainerProps {
  children: ReactChild | ReactChildren;
}

const PageContainer = ({ children }: PageContainerProps): JSX.Element => (
  <>
    <Particles className="absolute z-0" settings={settings} />
    <div className="relative z-10 h-full">{children}</div>
  </>
);

export default PageContainer;
