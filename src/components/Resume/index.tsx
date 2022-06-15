function Resume() {
  return (
    <div className="rounded bg-white flex flex-col py-3.5 px-[20px]">
      <header className="mb-6">Resumo geral operações</header>
      <div className="flex flex-row w-full justify-between">
        <div className="">
          <p className="text-body3 text-xs">Resumo de movimentação</p>
          <strong className="text-orangeWarning">-R$220,00</strong>
        </div>
        <div>
          <p className="text-body3 text-xs">Total de transações realizadas</p>
          <strong className="flex justify-end">443</strong>
        </div>
      </div>
      <div className="w-full h-px bg-gray2 my-4" />
    </div>
  );
}
export { Resume };
