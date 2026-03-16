// let name = prompt("Введите ваше имя:");
// let surname = prompt("Введите вашу фамилию:");
// let age = prompt("Введите ваш возраст:");
// let gender = prompt("Введите ваш пол:");
// let height = prompt("Введите ваш рост:");
// let weight = prompt("Введите ваш вес:");

// console.log("Привет, " + name + "!");
// console.log("Ваша фамилия: " + surname);
// console.log("Вам " + age + " лет");
// console.log("Ваш пол: " + gender);
// console.log("Ваш рост: " + height + " см");
// console.log("Ваш вес: " + weight + " кг");
// let arr = [1, [2, [3, { count: 4 }, [ 'не число', [5]]]]]
// function getNumbers(data, result = []) {
//   if (Array.isArray(data)) {
//     for (let item of data) {
//       getNumbers(item, result);
//     }
//   } else if (typeof data === "object" && data !== null) {
//     for (let key in data) {
//       getNumbers(data[key], result);
//     }
//   } else if (typeof data === "number") {
//     result.push(data);
//   }

//   return result;
// }

// console.log(getNumbers(arr));


// let age =  prompt ( 'выведите ваш возраст')
// let peopel = prompt ( 'name')

// if( age <=18 ){
//     console.log( ' доступ разрешен')
// }
// else( peopel<=5 ){
//     console.log( ' name ,у вас есть доступ')
// }

let day = prompt( ' выведите день недели  ')

if( day==='вторник '||  day==='четверг' ||day==='суббота'){
    console.log( 'Четный')
}else if(day==='Понидельник' || day==='среда' || day==='пятница' || day==='воскресенье'){
    console.log( 'нечетный')
}

































