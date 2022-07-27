export const getClassesAmount = (num: number) => {
  if (num === 0) return false
  else if (num === 1) return "1 пара"
  else if (num === 5 || num === 6) return `${num} пар`
  else return `${num} пары`
}
