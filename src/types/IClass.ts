export interface IClass {
  id: number
  subject: string
  professor: string
  location: string
  timeStart: string
  timeEnd: string
  type: "Практика" | "Лекция"
  number: number
}
