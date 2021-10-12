import ButtonGrid from '../../components/button-grid';
import Linux from '../../assets/linux.png';

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
    name: 'Tailwind CSS',
    image: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    link: 'https://tailwindcss.com/',
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
    name: 'GraphQL',
    image: 'https://cdn.worldvectorlogo.com/logos/graphql.svg',
    link: 'https://graphql.org/',
  },
  {
    name: 'PostgreSQL',
    image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'MongoDB',
    image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Elasticsearch',
    image: 'https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg',
    link: 'https://www.elastic.co/',
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
    image: 'https://nx.dev/documentation/latest/shared/jest-logo.png',
    link: 'https://jestjs.io/',
  },
  {
    name: 'Git',
    image: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    link: 'https://git-scm.com/',
  },
];

const Skills = (): JSX.Element => <ButtonGrid items={skills} />;

export default Skills;
