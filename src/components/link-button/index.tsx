interface Props {
  children: React.ReactNode;
  onClick: (...params: unknown[]) => void;
}

const LinkButton = ({ children, onClick }: Props) => (
  <button
    type="button"
    className="px-6 py-3 mr-4 text-base font-bold text-white rounded-lg focus:border-bills-red-600 focus:ring-1 focus:ring-bills-red-600 focus:border-none bg-bills-red-600 hover:bg-bills-red-400 duration-200"
    onClick={() => onClick()}
  >
    {children}
  </button>
);

export default LinkButton;
