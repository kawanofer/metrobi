// #2  Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,etc., seconds apart.
const printWithDelay = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sleep = 1000 * Math.pow(2, i);
    console.log(`\tSleeping for ${sleep} ms`);
    await new Promise((resolve) => setTimeout(resolve, sleep));
    console.log(`\t${arr[i]}`);
  }
};
export default printWithDelay;
