import { Format } from '../../utils/format';
import { BotProps } from '../../types';

function Card({
  title,
  running,
  id,
  simulation,
  last_paper,
  movimentations,
  strategy,
  stock_codes,
  mode,
  initial_capital,
  daily_balance,
  number_trades,
}: BotProps) {
  return (
    <div className="flex items-center w-96 h-64 bg-white py-3.5 px-5 m-4 shadow-3xl rounded-sm">
      <div className="w-full">
        <header className="flex justify-between">
          <span
            className={`flex items-center text-body1 font-bold ${
              title.length > 28 ? 'text-xs' : 'text-base'
            }`}
          >
            {title}
          </span>
          <span className="flex items-center space-x-1">
            <span
              className={`rounded-full w-2 h-2 ${
                running === 0 ? 'bg-orangeWarning' : 'bg-greenLight'
              }`}
            />
            <span className="text-body3">
              {running == 0 ? 'Parado' : 'Em execução'}
            </span>
          </span>
        </header>
        <p className="text-body4">#{id}</p>
        <div className="text-body4 text-xs flex flex-row space-x-1 mt-[5px]">
          <div className="border border-gray2 rounded-sm px-1.5">
            {simulation === 0 ? 'Pessimista' : 'Otimista'}
          </div>
          <div className="border border-gray2  rounded-sm px-1.5">
            {last_paper ? <>{last_paper.profit}</> : '-'} %
          </div>
          <div className="border border-gray2  rounded-sm px-1.5">
            {strategy}
          </div>
        </div>
        <div className="flex flex-row border border-gray2 rounded-sm mt-[18px] px-2 items-center justify-between">
          <div className="flex flex-row justify-center items-center">
            {last_paper && (
              <div className="text-[2rem] text-body2 font-bold ml-4 mr-3.5">
                {last_paper.position}
              </div>
            )}
            <div className="flex flex-col mr-9 py-3.5">
              {last_paper && (
                <div className="text-body3 font-bold text-base leading-5">
                  {last_paper.paper}
                </div>
              )}
              <span className="text-body1 text-sm leading-5">
                {mode === 0 ? 'Venda' : 'Compra'}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-body4">{Format(initial_capital)}</span>
            {last_paper && (
              <span className="text-greenLight">
                {Format(last_paper.paper_value)}
              </span>
            )}
          </div>
        </div>
        <footer className="mt-6 flex justify-between">
          <div>
            <div className="text-body3 text-xs">Saldo diário </div>
            <div className="font-bold text-greenLight">
              {Format(daily_balance)}
            </div>
          </div>
          <div>
            <div className="text-body3 text-xs">Trades no dia </div>
            <div className="font-bold text-body2 flex justify-end">
              {number_trades}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export { Card };
