import { useState } from 'react';
import { ModalComponent } from '../ModalComponent';

function Robot() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="rounded w-full bg-white flex flex-row items-center p-6 hover:animate-pulse"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <div className="border border-gray2 w-20 h-20 rounded flex items-center justify-center ">
          <img src="new_bot.svg" alt="New bot" />
        </div>
        <div className="flex flex-col ml-6 items-center md:items-start">
          <strong>Adicionar novo robô</strong>
          <span className="text-body4">
            Você possui <strong className="text-greenLight">02 robôs</strong>{' '}
            disponíveis
          </span>
        </div>
      </button>
      <ModalComponent modalOpen={modalOpen} />
    </>
  );
}
export { Robot };
