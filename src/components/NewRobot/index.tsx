import { NewRobotProps } from 'types';

const NewRobot = ({ actionTitle, botsAvailable, onClick }: NewRobotProps) => (
  <button
    type="button"
    className="rounded w-full bg-white flex flex-row items-center p-6 hover:animate-pulse"
    onClick={onClick}
  >
    <div className="border border-gray2 w-20 h-20 rounded flex items-center justify-center ">
      <img src="new_bot.svg" alt="New bot" />
    </div>
    <div className="flex flex-col ml-6 items-center md:items-start">
      <strong>{actionTitle}</strong>
      <span className="text-body4">
        Você possui{' '}
        <strong className="text-greenLight">{botsAvailable} robôs</strong>{' '}
        disponíveis
      </span>
    </div>
  </button>
);
export { NewRobot };
