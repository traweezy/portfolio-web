declare module 'react-particle-backgrounds';
declare module '../../assets/resume.pdf';

interface ParticleBackgroundConfig {
  particle: Particle;
  velocity: Velocity;
  opacity: Opacity;
}

interface Opacity {
  minOpacity: number;
  maxOpacity: number;
  opacityTransitionTime: number;
}

interface Particle {
  particleCount: number;
  color: string;
  minSize: number;
  maxSize: number;
}

interface Velocity {
  directionAngle: number;
  directionAngleVariance: number;
  minSpeed: number;
  maxSpeed: number;
}
