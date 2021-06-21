import React from 'react';

import Navigation from './components/navigaiton';

const App = (): JSX.Element => (
  <div className="h-full grid grid-cols-12 grid-flow-col font-titillium">
    <div className="border-r-2 border-black md:col-span-3 lg:col-span-1p">
      <Navigation />
    </div>
    <div className=" col-span-9" />
  </div>
);

export default App;
