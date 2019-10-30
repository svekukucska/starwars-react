export const isValidDate = (d) => d instanceof Date && !isNaN(d);
export const formatedDate = (date) => {
  if (date) {
    const dateObject = new Date(date);
    const dateFull = isValidDate(dateObject)
      ? `${dateObject.getDate()}
        ${dateObject.toLocaleString('default', { month: 'long' })}
        ${dateObject.getFullYear()}` : '';
    return dateFull;
  }
  return '';
};
