import React, { Fragment } from 'react';
import NavItem from './components/nav-item';
import SocialIcon from './components/social-icon';

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
        <Fragment key={link}>
          <NavItem name={link} />
          <br />
        </Fragment>
      ))}
    </div>
    <div>
      <SocialIcon name="marklar" />
    </div>
  </div>
);

export default Navigation;
