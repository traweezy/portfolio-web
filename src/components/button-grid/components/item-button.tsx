interface Props {
  item: ButtonGridItem;
}

const SkillButton = ({ item }: Props): JSX.Element => (
  <a
    title={item.name}
    className="flex flex-col items-center justify-around max-w-sm p-3 py-4 text-center bg-gray-100 border-2 border-gray-300 md:py-0 md:hover:shadow-xl rounded-md md:rounded-xl md:hover:bg-tangerine-500 transition duration-500 ease-in-out"
    type="button"
    href={item.link}
    target="_blank"
    rel="noreferrer"
  >
    <img className="w-12 pb-2" src={item.image} alt={item.name} />
    <span className="font-bold">{item.name}</span>
  </a>
);

export default SkillButton;
