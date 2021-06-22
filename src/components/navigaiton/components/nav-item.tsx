import React from 'react';

interface NavItemProps {
  name: string;
}

const NavItem = ({ name }: NavItemProps): JSX.Element => (
  <div className="relative inline-block my-2 text-4xl font-extrabold text-black uppercase cursor-pointer underline-animate transition duration-500 ease-in-out">
    {name}
  </div>
);

export default NavItem;
