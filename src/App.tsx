import React, { useEffect } from 'react';
import { Card } from './components/Card';
import { Breadcrumb } from './components/Breadcrumb';
import { Resume } from './components/Resume';
import { Robot } from './components/Robot';
import { ScrollButton } from './components/ScrollToTop';
import { useGetBots } from './hooks/useGetBots';
import { usePostBot } from './hooks/usePostBot';

function App() {
  const { getBots, bots } = useGetBots();
  useEffect(() => {
    getBots();
  }, [getBots]);
  return (
    <div className="flex flex-col justify-center p-5 bg-gray w-full space-y-5 min-h-screen">
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

      <div className="flex flex-wrap place-content-center w-auto">
        {bots.map((bot, index) => (
          <Card key={index} {...bot} />
        ))}
      </div>
    </div>
  );
}
export default App;
