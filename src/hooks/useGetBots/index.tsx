import { useCallback, useState } from 'react';
import { BotProps } from '../../components/types';
import { botService } from '../../services/api';

const useGetBots = () => {
  const [bots, setBots] = useState<BotProps[]>([]);
  const getBots = useCallback(async () => {
    const { status, data } = await botService.getAll();
    if (status !== 200) throw new Error();
    setBots(data.data);
  }, []);
  return { getBots, bots };
};
export { useGetBots };
