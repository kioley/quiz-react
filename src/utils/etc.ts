export function getPercent(number: number, from: number) {
  return ((number + 1) / from) * 100
}

export function randomize(to: number) {
  return Math.floor(Math.random() * to)
}
