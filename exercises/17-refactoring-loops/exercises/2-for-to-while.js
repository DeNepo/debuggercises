// fill in the blanks so that both loops behave the same
//  the tests are correct, there's no need to change them!
const forToWhile_2_Tests = [
  { name: 'first', args: [-60], expected: 10 },
  { name: 'second', args: [3], expected: 3 },
  { name: 'third', args: [-3], expected: 10 },
  { name: 'fourth', args: [0], expected: 0 },
  { name: 'fifth', args: [100], expected: 10 },
  { name: 'sixth', args: [12], expected: 10 },
  { name: 'seventh', args: [67], expected: 10 },
  { name: 'eighth', args: [-4], expected: 10 },
  { name: 'ninth', args: [-2], expected: 10 },
  { name: 'tenth', args: [4], expected: 6 },
];

// refactor this for loop into a while loop
function forToWhile(a) {
  let result = 0;
  for (let i = 0, j = 10; i !== j && i !== a; i++ , j--) {
    result += i;
  }
  return result;
}

forToWhile_2_Tests.forEach(function evaluateTestCase(test) {
  try {
    console.assert(forToWhile(...test.args) === test.expected, test.name + ' ' + forToWhile(...test.args));
  } catch (err) {
    if (err.message === 'Loop exceeded 1000 iterations') {
      test.hasOwnProperty('expected')
        ? console.assert(false, test.name + ' ---> 1000+')
        : console.assert(true, test.name + ' ---> 1000+');
    } else { throw err; }
  }
});
