export const getFutureDate = (): string => {
  const date: Date = new Date();
  date.setDate(date.getDate() + 7);

  return date
    .toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace('.', '');
};