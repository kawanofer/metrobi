// #1 Write a javascript function that finds the duplicate items in any given array.
const findDuplicates = (arr) => {
  const duplicates = [];
  const seen = new Set();
  arr.forEach((item) => {
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  });
  return duplicates;
};

export default findDuplicates;
