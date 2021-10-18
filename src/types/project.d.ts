type LinkType = 'GITHUB' | 'SWAGGER' | 'PLAYGROUND' | 'LIVE';

interface Link {
  id: number;
  url: string;
  type: LinkType;
}

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  links: Link[];
  sortIndex: number;
  isWorkInProgress: boolean;
}
