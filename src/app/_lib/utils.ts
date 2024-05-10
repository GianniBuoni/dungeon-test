export const capFirst = (input: string) => {
  const cap = input.slice(0, 1).toUpperCase();
  const rest = input.slice(1);
  return cap + rest;
};
