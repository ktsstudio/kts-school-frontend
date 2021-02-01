var arr = [1, 2, 3, 4, 5]

// длина массива
console.log(arr.length);

// проверка, является ли объект массивом
console.log(Array.isArray(arr));
console.log(Array.isArray({}));

// добавить в конец массива
arr.push(6, 7);
console.log(arr);  // [1, 2, 3, 4, 5, 6, 7]

// добавить в начало массива
arr.unshift(0);
console.log(arr);  // [0, 1, 2, 3, 4, 5, 6, 7]

// удалить из конца массива
arr.pop();
console.log(arr);  // [0, 1, 2, 3, 4, 5, 6]

// удалить из начала массива
arr.shift();
console.log(arr);  // [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let el of arr) {
  console.log(el);
}

arr.forEach(function (el) {
  console.log(el);
})

// начиная с индекса 1 удалить 2 элемента и добавить новый элемент 10
var el1 = arr.splice(1, 2, 10)
console.log(el1, arr)

// извлечь элементы начиная с третьего с конца элемента до первого с конца элемента 
var el2 = arr.slice(-3, -1)
console.log(el2, arr)

// увеличиваем все числа на 1
console.log(arr.map(function (el) {
  return el + 1;
}))

// считаем сумму всех чисел
console.log(arr.reduce(function (acc, el) {
  return acc + el;
}, 0))

// сортирует элементы
console.log(arr.sort());
console.log(arr.sort(function (a, b) {
  return a - b;
}));

// разворачиваем массив
console.log(arr.reverse())

// получаем строку
console.log(arr.join(' '))  // '10 6 5 4 1'
// разбиваем строку на массив
console.log('1 2 3'.split())  // [ '1 2 3' ]