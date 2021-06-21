import React from 'react';

import Navigation from './components/navigaiton';

const App = (): JSX.Element => (
  <div className="h-full grid grid-cols-12 grid-flow-col font-titillium">
    <div className="border-r-2 border-black col-span-3">
      <Navigation />
    </div>
    <div className=" col-span-9" />
  </div>
);

export default App;
