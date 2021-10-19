interface Props {
  children: React.ReactNode;
  onClick: (...params: unknown[]) => void;
}

const LinkButton = ({ children, onClick }: Props) => (
  <button
    type="button"
    className="px-6 py-3 mr-4 text-base font-bold text-white rounded-lg focus:border-tangerine-600 focus:ring-1 focus:ring-tangerine-600 focus:border-none bg-tangerine-600 hover:bg-tangerine-400 duration-200"
    onClick={() => onClick()}
  >
    {children}
  </button>
);

export default LinkButton;
