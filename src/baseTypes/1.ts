// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: any;
let callback: (a: number) => number = (a) => { return 100 + a };


// interface User {
//   age: number;
//   name: string;
//   toggle: boolean;
//   empty: null;
//   notInitialize: any;
//   callback: any;
// }

// let user: User = {
//   age: 50,
//   name: 'Max',
//   toggle: true,
//   empty: null,
//   notInitialize, //* Підсвічує що не зроблена початкова ініціалізація
//   callback: (a) => { return 100 + a },
// }







export { age, name, toggle, empty, notInitialize, callback };
