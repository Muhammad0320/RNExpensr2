export const dateFormatter = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const calcLast7days = (date, day) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - day}`;
};
