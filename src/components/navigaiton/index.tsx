import React from 'react';
import NavItem from './components/nav-item';

const links = ['about', 'projects', 'contact'];

const Navigation = (): JSX.Element => (
  <div className="h-full p-4">
    <div className="mb-12">
      <div className="inline-block text-4xl font-extrabold text-black uppercase">
        tyler
        <br />
        schumacher
      </div>
    </div>
    <div>
      {links.map(link => (
        <>
          <NavItem key={link} name={link} />
          <br />
        </>
      ))}
    </div>
    <div />
  </div>
);

export default Navigation;
