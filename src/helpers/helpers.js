export const extractLocation = (str) => {
  const arrStr = str.split(",");
  const lastIndex = arrStr.length - 1;
  const location = {
    country: arrStr[lastIndex],
    city: arrStr[lastIndex - 1],
  };
  return location;
};
