/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

//* Приклад використання
const pair1: KeyValuePair<string, number> = { key: 'age', value: 25 }
console.log(pair1);

const pair2: KeyValuePair<string, string> = { key: 'name', value: "Ivan" }
console.log(pair2);

export { };