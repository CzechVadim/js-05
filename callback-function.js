/*1. Прототип объекта и метод Object.create() -------------------------------------
Задание
Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
Тест
    Объявлена переменная parent.
    Значение переменной parent это объект.
    Вызов parent.hasOwnProperty('surname') возвращает true.
    Вызов parent.hasOwnProperty('heritage') возвращает true.
    Объявлена переменная child.
    Значение переменной child это объект.
    Вызов child.hasOwnProperty('name') возвращает true.
    Обращение к child.name возвращает 'Jason'.
    Вызов child.hasOwnProperty('age') возвращает true.
    Обращение к child.age возвращает 27.
    Вызов child.hasOwnProperty('surname') возвращает false.
    Обращение к child.surname возвращает 'Moore'.
    Вызов child.hasOwnProperty('heritage') возвращает false.
    Обращение к child.heritage возвращает 'Irish'.
    Вызов parent.isPrototypeOf(child) возвращает true.
    Используется метод Object.create().*/
const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
};
// Пиши код ниже этой строки
    
const child = Object.create(parent);
    
console.log(child.surname);  //Moore
console.log(child.heritage);  //Irish
console.log(parent.isPrototypeOf(child));  //true
    
// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;




/*2. Задача. Цепочка прототипов ------------------------------------------------------------------------------------------------------------
Задание
Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
Тесты
    Объявлена переменная ancestor.
    Значение переменной ancestor это объект.
    Объявлена переменная parent.
    Значение переменной parent это объект.
    Объявлена переменная child.
    Значение переменной child это объект.
    Вызов parent.isPrototypeOf(child) возвращает true.
    Обращение к parent.surname возвращает 'Moore'.
    Обращение к parent.heritage возвращает 'Irish'.
    Вызов parent.hasOwnProperty('surname') возвращает true.
    Вызов parent.hasOwnProperty('heritage') возвращает false.
    Вызов ancestor.isPrototypeOf(parent) возвращает true.
    Вызов child.hasOwnProperty('surname') возвращает false.
    Обращение к child.surname возвращает 'Moore'.
    Обращение к child.heritage возвращает 'Irish'.
    Вызов child.hasOwnProperty('heritage') возвращает false.
    Обращение к ancestor.heritage возвращает 'Irish'.
    Вызов ancestor.hasOwnProperty('surname') возвращает true.
    Вызов ancestor.hasOwnProperty('heritage') возвращает true.
    Обращение к ancestor.surname возвращает 'Dawson'.
    Используется метод Object.create().*/
const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(child.surname);  //Moore
console.log(child.heritage);  //Irish
console.log(parent.heritage);  //Irish
console.log(ancestor.isPrototypeOf(parent));  //true
console.log(ancestor.isPrototypeOf(child));  //true

// Пиши код выше этой строки




/*3. Функция-конструктор ---------------------------------------------------------------------------------------------------------------------------------------------------
Задание
Объяви функцию-конструктор Car которая принимает три параметра:
    brand - марка автомобиля.
    model - модель автомобиля.
    price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.
Тесты
    Объявлена функция Car(brand, model, price).
    В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
    В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
    В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.*/
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
    
const Audi = new Car('Audi', 'Q3', 36000);
const BMW = new Car('BMW', 'X5', 58900);
const Nissan = new Car('Nissan', 'Murano', 31700);

console.log(Audi); // { brand: 'Audi', model: 'Q3', price: 36000 }
console.log(BMW); // { brand: 'BMW', model: 'X5', price: 58900 }
console.log(Nissan); // { brand: 'Nissan', model: 'Murano', price: 31700 }




/*4. Объект настроек ----------------------------------------------------------------------------------------------------------------------------------------------------------------
Задание
Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.
Тесты
    Объявлена функция Car({ brand, model, price }).
    В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
    В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
    В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.*/
function Car({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
    
const Audi = new Car({brand: 'Audi', model: 'Q3', price: 36000});
const BMW = new Car({brand: 'BMW', model: 'X5', price: 58900});
const Nissan = new Car({brand: 'Nissan', model: 'Murano', price: 31700});
    
console.log(Audi); // { brand: 'Audi', model: 'Q3', price: 36000 }
console.log(BMW); // { brand: 'BMW', model: 'X5', price: 58900 }
console.log(Nissan); // { brand: 'Nissan', model: 'Murano', price: 31700 }



/*5. Свойство prototype ------------------------------------------------------------------------------------------------------------------------------------------------------
Задание
Добавь в свойство prototype функции-конструктора Car два метода:
    getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
    changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
Тесты
    Объявлена функция Car({ brand, model, price }).
    Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
    Значение Car.prototype.getPrice это функция.
    Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
    Значение Car.prototype.changePrice это функция.
    У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
    У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.*/
function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
    
Car.prototype.getPrice = function () {
    return this.price;
};
console.log(Car.prototype.hasOwnProperty('getPrice'));  //true
    
Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};
console.log(Car.prototype.hasOwnProperty('changePrice'));  //true
    
const Audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(Audi.getPrice());  // 36000
    
Audi.changePrice(35000);
console.log(Audi.getPrice());  // 35000



/*
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
   return this.items;
};
console.log(Storage.prototype.hasOwnProperty('getItems'));  //true

Storage.prototype.addItem = function (newItem) {
    this.items = newItem;
};
console.log(Storage.prototype.hasOwnProperty('addItem'));  //true

Storage.prototype.removeItem = function (item) {
    this.items = item;
};
console.log(Storage.prototype.hasOwnProperty('removeItem'));  //true



// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


*/