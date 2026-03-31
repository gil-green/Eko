export function range(start: number, end: number, step: number = 1): number[] {
  const length = (end - start) / step + 1;
  return Array.from({ length }, (_, i) => i * step + start);
};