export const countEachElement = (array) => {
  const counts = {};

  array.forEach((element) => {
    counts[element] = counts[element] ? (counts[element] + 1) : 1;
  });

  return Object.entries(counts);
};
