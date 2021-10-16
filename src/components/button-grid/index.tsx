import SkillButton from './components/item-button';

interface Props {
  items: ButtonGridItem[];
}

const ButtonGrid = ({ items }: Props): JSX.Element => (
  <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {items.map(item => (
        <SkillButton key={item.name} item={item} />
      ))}
    </div>
  </div>
);

export default ButtonGrid;
