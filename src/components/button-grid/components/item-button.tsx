interface Props {
  item: ButtonGridItem;
}

const SkillButton = ({ item }: Props): JSX.Element => {
  const handleClick = (url: string): void =>
    window.open(url, '_blank')?.focus();

  return (
    <button
      type="button"
      className="flex flex-col items-center justify-around max-w-sm p-3 text-center bg-gray-100 border-2 border-gray-300 md:hover:shadow-xl rounded-md md:rounded-xl md:hover:bg-tangerine-600 transition duration-500 ease-in-out"
      onClick={() => handleClick(item.link)}
    >
      <img className="w-12 pb-2" src={item.image} alt={item.name} />
      <span className="font-bold">{item.name}</span>
    </button>
  );
};

export default SkillButton;
