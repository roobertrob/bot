import React, { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Breadcrumb } from './components/Breadcrumb';
import { Resume } from './components/Resume';
import { NewRobot } from './components/NewRobot';
import { ScrollButton } from './components/ScrollToTop';
import { useBots } from './stores/useBots';
import { Spinner } from './components/Spinner';
import { ModalComponent } from './components/ModalComponent';
import { useAvailableBots } from './stores/useAvailableBots';

function App() {
  const { bots, fetch, loading } = useBots((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  const { getAvailableBots, availableBots } = useAvailableBots(
    (state) => state,
  );

  useEffect(() => {
    fetch();
  }, [getAvailableBots, fetch, availableBots]);

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
      <NewRobot
        actionTitle="Adicionar novo robô"
        botsAvailable={getAvailableBots()}
        onClick={() => setModalOpen(!modalOpen)}
      />
      <ScrollButton />
      <ModalComponent modalOpen={modalOpen} />

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
