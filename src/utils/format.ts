const Format = (value: number) =>
  value &&
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export { Format };
