export const iterationFromNumber = (num: number): number[] =>
    Array(num)
    .fill(0)
    .map((_, i) => i)