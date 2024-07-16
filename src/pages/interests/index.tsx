import { useMemo } from 'react';
import ButtonGrid from '../../components/button-grid';
import Books from '../../assets/books.png';
import BuffaloBillsLogo from '../../assets/buffalo-bills-logo.svg';
import BuffaloSabresLogo from '../../assets/buffalo-sabres-logo.svg';
import NewYorkKnicksLogo from '../../assets/new-york-knicks-logo.svg';
import Bass from '../../assets/bass.png';
import Motorcycles from '../../assets/motorcycles.png';
import shuffleArray from '../../utils/shuffle-array';

const interests: ButtonGridItem[] = [
  {
    name: 'Buffalo Bills',
    image: BuffaloBillsLogo,
    link: 'https://www.buffalobills.com/',
  },
  {
    name: 'Buffalo Sabres',
    image: BuffaloSabresLogo,
    link: 'https://www.nhl.com/sabres/',
  },
  {
    name: 'New York Knicks',
    image: NewYorkKnicksLogo,
    link: 'https://www.nhl.com/sabres/',
  },
  {
    name: 'Books',
    image: Books,
    link: 'https://en.wikipedia.org/wiki/Book',
  },
  {
    name: 'Bass Guitar',
    image: Bass,
    link: 'https://en.wikipedia.org/wiki/Bass_guitar',
  },
  {
    name: 'Motorcycles',
    image: Motorcycles,
    link: 'https://en.wikipedia.org/wiki/Motorcycle',
  },
];

const Interests = (): JSX.Element => {
  const shuffledInterests = useMemo(() => shuffleArray(interests), []);
  return <ButtonGrid items={shuffledInterests} />;
};

export default Interests;
