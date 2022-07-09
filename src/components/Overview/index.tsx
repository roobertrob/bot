import { Data } from 'types';
import { Format } from 'utils/format';

const Overview = ({ moviment_summary, transactions }: Data) => (
  <div className="rounded bg-white flex flex-col py-3.5 px-[20px]">
    <header className="mb-6">Resumo geral operações</header>
    <div className="flex flex-row w-full justify-between">
      <div className="">
        <p className="text-body3 text-xs">Resumo de movimentação</p>
        <strong className="text-orangeWarning">
          {Format(moviment_summary)}
        </strong>
      </div>
      <div>
        <p className="text-body3 text-xs">Total de transações realizadas</p>
        <strong className="flex justify-end">{transactions}</strong>
      </div>
    </div>
    <div className="w-full h-px bg-gray2 my-4" />
    <div className="container flex flex-row">
      <div className="bg-greenLight rounded-sm py-1 px-2">WING20</div>
      <div className="w-20 h-px bg-gray2 my-4" />
      <div>157 transações</div>
    </div>
  </div>
);

export { Overview };
