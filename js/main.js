/*
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
  Поле "автори" - масив. Кожен автор має поля name,age
- Створити масив з 10 об'єктами які описують сутніть "користувач".
  Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 4px solid green; padding-left: 10px; display: block; white-space: pre-wrap;';
const styleNone = 'color: none;';
const styleNumber = 'color: cornflowerblue;';
const styleString = 'color: hotpink;';

const headerBegin = `<p style="${styleHeader}">`, headerEnd = '</p>';
const htmlBoolean = `<span style="${styleBoolean}">`;
const htmlNumber = `<span style="${styleNumber}">`;
const htmlString = `<span style="${styleString}">`;
const htmlEOL = '</span><br>';

const task1 = `- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль`;
const task2 = `- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.`;
const task3 = `- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
  Поле "автори" - масив. Кожен автор має поля name,age`;
const task4 = `- Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password. Вивести в консоль пароль кожного користувача`;

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log('%c%s', styleHeader, task1);
const arrAnyData = [1, 2, 3, 'one', 'two', 'three', true, false, [1, 'two', true], {one: 1, two: true, three: 'three'}];
console.log('arrAnyData[%c0%c] = %c%s', styleNumber, styleNone, styleNumber, arrAnyData[0]);
console.log('arrAnyData[%c1%c] = %c%s', styleNumber, styleNone, styleNumber, arrAnyData[1]);
console.log('arrAnyData[%c2%c] = %c%s', styleNumber, styleNone, styleNumber, arrAnyData[2]);
console.log('arrAnyData[%c3%c] = %c"%s"', styleNumber, styleNone, styleString, arrAnyData[3]);
console.log('arrAnyData[%c4%c] = %c"%s"', styleNumber, styleNone, styleString, arrAnyData[4]);
console.log('arrAnyData[%c5%c] = %c"%s"', styleNumber, styleNone, styleString, arrAnyData[5]);
console.log('arrAnyData[%c6%c] = %c%s', styleNumber, styleNone, styleBoolean, arrAnyData[6]);
console.log('arrAnyData[%c7%c] = %c%s', styleNumber, styleNone, styleBoolean, arrAnyData[7]);
console.log('arrAnyData[%c8%c] = %c%o', styleNumber, styleNone, arrAnyData[8]);
console.log('arrAnyData[%c9%c] = %c%o', styleNumber, styleNone, arrAnyData[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
console.log('%c%s', styleHeader, task2);
const obj1 = {
    title: '«Код да Вінчі», Ден Браун',
    pageCount:  480,
    genre: 'Детективні романи'
};
const obj2 = {
    title: '«Дружина мого чоловіка», Коррі Джейн',
    pageCount:  432,
    genre: 'Психологічні трилери'
};
const obj3 = {
    title: '«Сад метеликів», Дот Гатчінсон',
    pageCount:  352,
    genre: 'Детективні романи'
};
console.log(obj1);
console.log(obj2);
console.log(obj3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//   Поле "автори" - масив. Кожен автор має поля name,age
console.log('%c%s', styleHeader, task3);
const book1 = {
    title: '«Код да Вінчі», Ден Браун',
    pageCount: 480,
    genre: 'Детективні романи',
    authors: [{name: 'Ден Браун', age: 58}]
};
const book2 = {
    title: '«Дружина мого чоловіка», Коррі Джейн',
    pageCount: 432,
    genre: 'Психологічні трилери',
    authors: [{name: 'Коррі Джейн', age: 45}]
};
const book3 = {
    title: '«Сад метеликів», Дот Гатчінсон',
    pageCount: 352,
    genre: 'Детективні романи',
    authors: [{name: 'Дот Гатчінсон', age: 38}]
};
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
//   Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('%c%s', styleHeader, task4);
const arrUsers = [
    {
        name: 'Адміністратор',
        username: 'admin',
        password: '123'
    },
    {
        name: 'Супер адмін',
        username: 'superadmin',
        password: '456'
    },
    {
        name: 'Завгосп',
        username: 'lazyman',
        password: '780'
    },
    {
        name: 'Бухгалтер',
        username: 'admin',
        password: 'password'
    },
    {
        name: 'Юрист',
        username: 'lawyer',
        password: '111222'
    },
    {
        name: 'Boss',
        username: 'boss',
        password: 'qaz123'
    },
    {
        name: 'Заступник',
        username: 'deputy',
        password: '54321'
    },
    {
        name: 'Робітник',
        username: 'worker',
        password: 'qwerty'
    },
    {
        name: 'Кур\'єр',
        username: 'courier',
        password: 'zzxxcc'
    },
    {
        name: 'Охорона',
        username: 'guard',
        password: 'wsqaed'
    },
];
console.log('%s = %c"%s"', arrUsers[0].name, styleString, arrUsers[0].password);
console.log('%s = %c"%s"', arrUsers[1].name, styleString, arrUsers[1].password);
console.log('%s = %c"%s"', arrUsers[2].name, styleString, arrUsers[2].password);
console.log('%s = %c"%s"', arrUsers[3].name, styleString, arrUsers[3].password);
console.log('%s = %c"%s"', arrUsers[4].name, styleString, arrUsers[4].password);
console.log('%s = %c"%s"', arrUsers[5].name, styleString, arrUsers[5].password);
console.log('%s = %c"%s"', arrUsers[6].name, styleString, arrUsers[6].password);
console.log('%s = %c"%s"', arrUsers[7].name, styleString, arrUsers[7].password);
console.log('%s = %c"%s"', arrUsers[8].name, styleString, arrUsers[8].password);
console.log('%s = %c"%s"', arrUsers[9].name, styleString, arrUsers[9].password);
