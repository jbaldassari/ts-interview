const closerToZero = (left: number, right: number) => {
  if (Math.abs(left) < Math.abs(right)) {
    return left;
  }
  if (Math.abs(left) > Math.abs(right)) {
    return right;
  }
  return Math.max(left, right);
};

export function closestToZero(...input: number[]): number | undefined {
  if (!input.length) {
    return;
  }
  return input.reduce(closerToZero);
}
