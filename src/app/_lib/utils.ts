export const capName = (input: string) => {
  const capLetter = input.slice(0, 1).toUpperCase();
  const rest = input.slice(1);
  return capLetter + rest;
};
