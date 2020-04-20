export const createObjectCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};
