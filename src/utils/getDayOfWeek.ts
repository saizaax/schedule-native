export const getDayOfWeek = (day: string) => {
  if (day === "ПН") return "Понедельник"
  if (day === "ВТ") return "Вторник"
  if (day === "СР") return "Среда"
  if (day === "ЧТ") return "Четверг"
  if (day === "ПТ") return "Пятница"
  if (day === "СБ") return "Суббота"
  if (day === "ВС") return "Воскресенье"
}
