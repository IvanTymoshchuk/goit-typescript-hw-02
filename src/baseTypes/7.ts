/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: DayOfWeek): boolean {
  const isWeekendDay = [DayOfWeek.Saturday, DayOfWeek.Sunday]

  return isWeekendDay.includes(day)
}

const todays = DayOfWeek.Saturday;
const isTodayWeekend = isWeekend(todays);
console.log(`isTodayWeekend: ${isTodayWeekend}`);
