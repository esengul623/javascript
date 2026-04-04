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

// let day = prompt( ' выведите день недели  ')

// if( day==='вторник '||  day==='четверг' ||day==='суббота'){
//     console.log( 'Четный')
// }else if(day==='Понидельник' || day==='среда' || day==='пятница' || day==='воскресенье'){
//     console.log( 'нечетный')
// }



// let arr= ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']
// let result = arr.filter(brand => brand === brand.toUpperCase());

// // console.log( result)
// // let result=''

// for(let i =1; arr<=length; i++){}

// Первая и последняя буква
// Возьмите слово "banana".
// Найдите первую букву (с помощью index [0] ).
// Найдите последнюю букву (с помощью word[word.length
// Выведите обе буквы в консоль.

// Проверка на буквы
// Возьмите слово "apple".
// Если первая буква равна "a", а последняя равна "e", выведите "Подходит!".
// Иначе выведите "Не подходит!".

// Первая и последняя буква
// let word = "banana";

// // первая буква
// let firstLetter = word[0];

// // последняя буква
// let lastLetter = word[word.length - 1];

// console.log(firstLetter);
// console.log(lastLetter);


// // Проверка на буквы
// let word2 = "apple";

// if (word2[0] === "a" && word2[word2.length - 1] === "e") {
//     console.log("Подходит!");
// } else {
//     console.log("Не подходит!");
// }






// Дан массив чисел, выведите минимальное число в этом массиве








// Напишите функцию, которая принимает ваше имя и фамилию. Выведите по итогу Здравствуйте, "Фамилия" "Имя". Рады вас видеть на курсах MetaLabs.







// Решите эту задачку

// Напишите функцию MasterYoda, которая будет возвращать
// 'Master' если передаваемый параметр кратен 3,
// 'Yoda', если передаваемый параметр кратен 5,
// 'MasterYoda' - если параметер кратен 3 и 5.
// Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр

// Input: 9    
// Output: Master

// Input: 10
// Output: Yoda

// Input: 15
// Output: MasterYoda

let i =10



// 1.  У вас есть массив чисел. Создайте новый массив, где каждое число возведено в квадрат.
// [2, 4, 6, 8];
// // Ожидаемый результат: [4, 16, 36, 64]
// 2. Из массива возрастов оставьте только те, чей возраст больше 27
// [12, 18, 27, 39, 40]
// // Ожидаемый результат [27, 39, 40]

// let num=[2,4,6,8]

// const result=num.map( num=> num*num)
// console.log (  result)


//2
// let ages =[12,18,27,39,40]
// let filteredAges = ages.filter(age => age >= 27);
// console.log(filteredAges); 










