const receivesAFunction = (myFunc) => myFunc();

const returnsANamedFunction = () => {
  const specialFunc = () => {};
  return specialFunc;
}

const returnsAnAnonymousFunction = () => () => {};