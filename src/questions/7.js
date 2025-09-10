/*
  7) Think that you have an unlimited number of carrots, but a limited number of carrot
  types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
  weight and a price. Write a function that takes carrotTypes and capacity and return the
  maximum value the bag can hold. [Python or Javascript]
  Example:
  carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
  capacity = 36 //kg
  getMaxValue(carrotTypes, capacity)
  */
const getMaxValue = (carrotTypes, capacity) => {
  const dp = Array(capacity + 1).fill(0);
  for (let i = 1; i <= capacity; i++) {
    for (let carrot of carrotTypes) {
      if (carrot.kg <= i) {
        dp[i] = Math.max(dp[i], dp[i - carrot.kg] + carrot.price);
      }
    }
  }
  return dp[capacity];
};

export default getMaxValue;
