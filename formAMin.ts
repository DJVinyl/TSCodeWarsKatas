export const minValue = (values: number[]): number => {
  let unique = values.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  let str = unique.sort((a,b) => a - b).join('')
  return Number(str);
};


console.log(minValue([1, 3, 1]));