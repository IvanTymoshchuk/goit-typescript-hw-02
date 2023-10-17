/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends AllType, K extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<K, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const topObj: Pick<AllType, keyof AllType> = {
  name: "Top Name",
  color: "Top Color",
  position: 0,
  weight: 0
};

const bottomObj: Pick<AllType, keyof AllType> = {
  position: 42,
  weight: 100,
  name: "",
  color: ""
};

const result: AllType = compare(topObj, bottomObj);
console.log(result);

export { };