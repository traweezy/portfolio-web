import React from 'react';

import Navigation from './components/navigaiton';

const App = (): JSX.Element => (
  <div className="flex h-full">
    <div className="border-r-2 border-black w-80 md:col-span-3 lg:col-span-1p">
      <Navigation />
    </div>
    <div className="w-full" />
  </div>
);

export default App;
