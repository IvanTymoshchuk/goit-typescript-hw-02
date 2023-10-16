/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const topObject = {
    name: "Top Name",
    color: "Top Color",
    position: 0,
    weight: 0
};
const bottomObject = {
    position: 42,
    weight: 100,
    name: "",
    color: ""
};
const result = compare(topObject, bottomObject);
console.log(result);
export {};
//# sourceMappingURL=2.js.map