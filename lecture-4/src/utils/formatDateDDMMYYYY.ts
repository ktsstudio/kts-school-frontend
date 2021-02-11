export const formatDateDDMMYYYY = (date: Date): string => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
