import { SpinnerGap } from 'phosphor-react';

const Spinner = () => (
  <div className="flex items-center justify-center rounded bg-white p-8 md:p-5 max-h-max animate-pulse">
    <SpinnerGap className="animate-spin duration-150 text-orangeWarning h-10 w-10 md:h-20 md:w-20" />
  </div>
);

export { Spinner };
