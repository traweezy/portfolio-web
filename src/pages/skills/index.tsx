import { useMemo } from 'react';
import ButtonGrid from '../../components/button-grid';
import Linux from '../../assets/linux.png';
import shuffleArray from '../../utils/shuffle-array';

const skills: ButtonGridItem[] = [
  {
    name: 'HTML5',
    image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    name: 'CSS3',
    image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS',
  },
  {
    name: 'Typescript',
    image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Sass',
    image: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Vitest',
    image:
      'https://seeklogo.com/images/V/vitest-logo-9ADDA575A5-seeklogo.com.png',
    link: 'https://vitest.dev/',
  },
  {
    name: 'NodeJS',
    image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    link: 'https://nodejs.org/en/',
  },
  {
    name: 'REST API',
    image:
      'https://everything1know.files.wordpress.com/2019/09/rest-icon-200x196-1.png',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
  },
  {
    name: 'Tanstack',
    image:
      'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
    link: 'https://tanstack.com/',
  },
  {
    name: 'PostgreSQL',
    image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'AWS',
    image:
      'https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png',
    link: 'https://aws.amazon.com/',
  },
  {
    name: 'Vite',
    image:
      'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Playwright ',
    image:
      'https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png',
    link: 'https://playwright.dev/',
  },
  {
    name: 'Windows',
    image: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg',
    link: 'https://www.microsoft.com/en-us/windows',
  },
  {
    name: 'Linux',
    image: Linux,
    link: 'https://www.linux.org/',
  },
  {
    name: 'Rust',
    image: 'https://cdn.worldvectorlogo.com/logos/rust.svg',
    link: 'https://www.rust-lang.org/',
  },
  {
    name: 'React Testing Library',
    image: 'https://testing-library.com/img/logo-large.png',
    link: 'https://testing-library.com/',
  },
  {
    name: 'Jest',
    image:
      'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
    link: 'https://jestjs.io/',
  },
];

const Skills = (): JSX.Element => {
  const shuffledSkills = useMemo(() => shuffleArray(skills), []);
  return <ButtonGrid items={shuffledSkills} />;
};

export default Skills;
