
const getRandomNumber = (): number => {
 return Number((Math.random()* 100000).toFixed(0));
};

export const utils = {
  getRandomNumber,
}; 