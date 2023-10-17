/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}
//! Якщо не знаю який тип данних прийде в функцію то VOID

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
//! Якщо функція прокидує помилку або не зупиняється то прокидуємо NEVER
function customError(): never {
  throw new Error('Error');
}

export { };