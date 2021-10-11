import ButtonGrid from '../../components/button-grid';
import Books from '../../assets/books.png';
import Bass from '../../assets/bass.png';
import Gaming from '../../assets/gaming.png';
import Motorcycles from '../../assets/motorcycles.png';
import Motocross from '../../assets/motocross.png';
import Snowmobiles from '../../assets/snowmobiles.png';

const skills: ButtonGridItem[] = [
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
  {
    name: 'Motocross',
    image: Motocross,
    link: 'https://en.wikipedia.org/wiki/Motocross',
  },
  {
    name: 'Snowmobiles',
    image: Snowmobiles,
    link: 'https://en.wikipedia.org/wiki/Snowmobile',
  },
  {
    name: 'Gaming',
    image: Gaming,
    link: 'https://en.wikipedia.org/wiki/Video_game',
  },
];

const Interests = (): JSX.Element => <ButtonGrid items={skills} />;

export default Interests;
