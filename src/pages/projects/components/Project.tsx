import LinkButton from '../../../components/link-button';
import JavascriptLogo from '../../../assets/javascript.svg';
import TypescriptLogo from '../../../assets/typescript.svg';
import ReactLogo from '../../../assets/react.svg';
import TailwindLogo from '../../../assets/tailwind.svg';
import NodeJSLogo from '../../../assets/nodejs.svg';
import PrismaLogo from '../../../assets/prisma.svg';
import PostgreSQLLogo from '../../../assets/postgresql.svg';
import DiscordLogo from '../../../assets/discord.svg';
import HTMLLogo from '../../../assets/html.svg';
import CSSLogo from '../../../assets/css.svg';
import GraphQLLogo from '../../../assets/graphql.svg';
import jQueryLogo from '../../../assets/jquery.svg';
import MaterialUI from '../../../assets/material-ui.svg';
import NoRespectBot from '../../../assets/no-respect-bot.png';
import PortfolioApi from '../../../assets/portfolio-api.png';
import Portfolio from '../../../assets/portfolio.png';
import TwistedRope from '../../../assets/twisted-rope.png';
import WorkInProgress from '../../../assets/work-in-progress.png';

const logos: Record<string, string> = {
  javascript: JavascriptLogo,
  typescript: TypescriptLogo,
  react: ReactLogo,
  tailwind: TailwindLogo,
  nodejs: NodeJSLogo,
  prisma: PrismaLogo,
  postgresql: PostgreSQLLogo,
  discord: DiscordLogo,
  html5: HTMLLogo,
  css3: CSSLogo,
  jquery: jQueryLogo,
  graphql: GraphQLLogo,
  materialui: MaterialUI,
};

const mockUps: Record<string, string> = {
  'no respect bot': NoRespectBot,
  'portfolio website': Portfolio,
  'portfolio api': PortfolioApi,
  'twisted rope company website': TwistedRope,
  wip: WorkInProgress,
};

interface Props {
  project: Project;
}

const Projects = ({ project }: Props): JSX.Element => {
  const gitHubLink = project.links.find((link: Link) => link.type === 'GITHUB');
  const liveLink = project.links.find((link: Link) => link.type === 'LIVE');
  const swaggerLink = project.links.find(
    (link: Link) => link.type === 'SWAGGER',
  );

  const links = [gitHubLink, liveLink, swaggerLink].filter(Boolean);

  const descriptionArr = project.description.split('.').filter(Boolean);

  const handleClick = (url: string): void =>
    window.open(url, '_blank')?.focus();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
      <div className="flex items-center mb-6 align-center justify-center col-span-1">
        <img
          className="xl:max-w-lg"
          src={
            project.isWorkInProgress
              ? mockUps.wip
              : mockUps[project.name.toLowerCase()] ?? project.image
          }
          alt={project.name}
        />
      </div>
      <div className="col-span-1">
        <div className="pb-6 text-xl font-bold">{project.name}</div>
        <ul className="pb-6 list-disc list-inside">
          {descriptionArr.map((chunk, index) => (
            <li
              key={chunk}
              className={
                index === descriptionArr.length - 1 ? 'lg:pb-2' : 'pb-1 lg:pb-4'
              }
            >
              {chunk}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center pb-6">
          {project.technologies?.filter(Boolean)?.map(technology => (
            <img
              key={technology}
              src={logos[technology]}
              alt={technology}
              className="w-10 pr-2 mr-1"
            />
          ))}
        </div>
        <div className="flex flex-row">
          {links.map(link =>
            link ? (
              <LinkButton key={link.id} onClick={() => handleClick(link.url)}>
                {link.type}
              </LinkButton>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
