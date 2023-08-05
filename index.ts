function permuteIteratively<T>(array: T[]): T[][] {
  const results: T[][] = [];
  const stack: number[] = Array(array.length).fill(0);
  let i = 0;

  results.push([...array]);

  while (i < array.length) {
    if (stack[i] < i) {
      swap(array, i % 2 === 0 ? 0 : stack[i], i);
      results.push([...array]);
      stack[i]++;
      i = 0;
    } else {
      stack[i] = 0;
      i++;
    }
  }

  return results;
}

function swap<T>(array: T[], i: number, j: number): void {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function combineIteratively<T>(array: T[], k: number): T[][] {
  const results: T[][] = [];
  const stack: number[] = [];
  let i = 0;

  while (true) {
    if (stack.length === k) {
      results.push(stack.map((index) => array[index]));
    }

    if (i >= array.length) {
      if (stack.length === 0) {
        break;
      }
      i = stack.pop()! + 1;
    } else {
      stack.push(i);
      i++;
    }
  }

  return results;
}

// Example usage


// Example usage
const numbers = [0, 1];
const permutations = permuteIteratively(numbers);
console.log(permutations);

const combinations = combineIteratively([0, 1], 2);
console.log(`-> ${combinations}`);
