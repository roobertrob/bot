import React, { useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RadioGroupComponent } from '../RadioGroup';
import { usePostBot } from '../../hooks/usePostBot';
import { PropsTypes } from '../../types';
import { useBots } from '../../stores/useBots';

function ModalComponent({ modalOpen }: PropsTypes) {
  const [isOpen, setIsOpen] = useState(modalOpen);
  const fetch = useBots((state) => state.fetch);
  const [data, setData] = useState({
    title: '',
    mode: 0,
    strategy_id: 1,
    initial_capital: 0,
    simulation: 0,
    broker_id: 1,
  });
  const options = [
    {
      id: 0,
      name: 'Tangran',
    },
    {
      id: 1,
      name: 'Price Action',
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  const { postBot } = usePostBot();

  useEffect(() => {
    setIsOpen(modalOpen);
  }, [modalOpen]);

  function handleChangeSelected(selected: number) {
    setData({ ...data, strategy_id: selected });
  }

  function submitForm(e: React.SyntheticEvent) {
    e.preventDefault();
    postBot(data);
    setIsOpen(false);
    fetch();   
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Dialog.Overlay className="fixed inset-0 h-screen bg-greenLight opacity-70" />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-2 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative md:w-[442px] md:h-[651px] bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-body-2 hover:text-body-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>X
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-left sm:mt-0 sm:text-left ">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-body1"
                    >
                      Adicionar novo robô
                    </Dialog.Title>
                    <div className="mt-2 text-body2 text-3xl flex flex-col">
                      <strong>Vamos criar seu robô</strong>
                      <span className="text-body3 text-xs">
                        Preencha as informações
                      </span>
                    </div>
                  </div>
                </div>
                <form action="" method="post">
                  <div className="mt-6 mb-10 space-y-4">
                    <div className="sm:flex sm:items-start sm:flex-col ">
                      <label htmlFor="name" className="text-sm mb-2">
                        Nome do produto
                      </label>
                      <input
                        onChange={(e) =>
                          setData({ ...data, title: e.target.value })
                        }
                        type="text"
                        name="name"
                        id="1"
                        placeholder="Nome do produto"
                        className="w-full p-3.5 border border-gray2 rounded-sm placeholder:text-body3 placeholder:text-sm"
                      />
                    </div>
                    <div className="sm:flex sm:items-start sm:flex-col ">
                      <label htmlFor="value" className="text-sm mb-2">
                        Capital inicial do robô
                      </label>
                      <input
                        type="number"
                        min="0.00"
                        step="0.01"
                        name="value"
                        id="2"
                        placeholder="R$"
                        onChange={(e) =>
                          setData({ ...data, initial_capital: +e.target.value })
                        }
                        className="w-full p-3.5 border border-gray2 rounded-sm placeholder:text-body3 placeholder:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-white">
                    <strong className="text-lg font-medium text-body1 mb-6">
                      Selecione uma das estratégias abaixo
                    </strong>
                    <RadioGroupComponent
                      options={options}
                      onChange={() => handleChangeSelected}
                      selected={selected}
                    />
                  </div>
                </form>
                <footer className="mt-10 flex flex-row justify-between">
                  <button
                    type="button"
                    className="w-[87px] flex justify-center items-center rounded-sm border border-gray2 px-4 py-2 bg-white text-sm text-grayButton hover:opacity-70 sm:w-auto sm:text-sm "
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-[87px] flex justify-center items-center rounded-sm border border-gray2 px-4 py-2 bg-greenLight text-sm text-white hover:opacity-70 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={submitForm}
                  >
                    Criar robô
                  </button>
                </footer>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export { ModalComponent };
