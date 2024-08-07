interface NavItemProps {
  name: string;
  isActive: boolean;
}

const NavItem = ({ name, isActive }: NavItemProps): JSX.Element => {
  const textColorClass = isActive ? 'text-bills-red-600' : 'text-white';
  return (
    <div
      className={`relative inline-block my-2 text-3xl font-extrabold ${textColorClass} uppercase cursor-pointer underline-animate transition duration-500 ease-in-out`}
    >
      {name}
    </div>
  );
};

export default NavItem;
