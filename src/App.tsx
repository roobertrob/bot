import { Breadcrumb } from 'components/Breadcrumb';
import { Card } from 'components/Card';
import { ModalComponent } from 'components/ModalComponent';
import { NewRobot } from 'components/NewRobot';
import { Overview } from 'components/Overview';
import { ScrollButton } from 'components/ScrollToTop';
import { Spinner } from 'components/Spinner';
import { useState, useEffect } from 'react';
import { useAvailableBots } from 'stores/useAvailableBots';
import { useBots } from 'stores/useBots';
import { useOverview } from 'stores/useOverview';

const App = () => {
  const { bots, fetch, loading } = useBots((state) => state);
  const { overview, fetchOverview, loadingOverview } = useOverview(
    (state) => state,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const { getAvailableBots, availableBots } = useAvailableBots(
    (state) => state,
  );

  useEffect(() => {
    fetch();
  }, [getAvailableBots, fetch, availableBots]);

  useEffect(() => {
    fetchOverview();
  }, [overview, fetchOverview, loadingOverview]);

  return (
    <div className="flex flex-col p-5 bg-gray w-full space-y-5 min-h-screen">
      <Breadcrumb
        items={[
          {
            children: 'Analise Geral',
            link: 'https://github.com/roobertrob',
          },
          {
            children: 'Principal',
            link: '',
          },
        ]}
      />
      <Overview {...overview.data} />
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
          {bots
            .slice(0)
            .reverse()
            .map((bot) => (
              <Card key={bot.id} {...bot} />
            ))}
        </div>
      )}
    </div>
  );
};
export default App;
