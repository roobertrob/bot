import React, { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Breadcrumb } from './components/Breadcrumb';
import { Resume } from './components/Resume';
import { Robot } from './components/Robot';
import { ScrollButton } from './components/ScrollToTop';
import { useBots } from './stores/useBots';
import { Spinner } from './components/Spinner';

function App() {
  const { bots, fetch, loading } = useBots((state) => state);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-col p-5 bg-gray w-full space-y-5 min-h-screen">
      <Breadcrumb
        items={[
          {
            children: 'Analise Geral',
            link: '',
          },
          {
            children: 'Principal',
            link: '',
          },
        ]}
      />
      <Resume />
      <Robot />
      <ScrollButton />

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap place-content-center w-auto">
          {bots.map((bot, index) => (
            <Card key={index} {...bot} />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
