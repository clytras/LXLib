export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export function addAB(a: number, b: number): number {
  return a + b;
}

export function addBA(a: number, b: number): number {
  return a + b;
}

export function addABC(a: number, b: number, c: number): number {
  return a + b + c;
}
