const interpret = (value) =>
  value === -1 ? 'not evaluated' // not yet evaluated
    : value === 0 ? '' // clean run, no assertions
      : value === 1 ? 'pass' // all console.asserts pass
        : value === 2 ? 'fail' // a console.assert fails
          : value === 3 ? 'error (handled)' // console.error
            : value === 4 ? 'unhandled rejection' // on unhandledRejection
              : value === 5 ? 'error (async)' // on uncaughtException
                : value === 6 ? 'error' // try/catch at evaluation time (synchronous errors)
                  : value === 7 ? 'error (syntax)' // syntax error
                    : value === 8 ? 'incomplete' // ReferenceError: _ is not defined
                      : value === 9 ? 'too much iteration' // Error: Loop exceeded [0-9] iterations
                        : value === 10 ? 'too much recursion' // RangeError: Maximum call stack size exceeded
                          : 'unknown status';

module.exports = interpret;
