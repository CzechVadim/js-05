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

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

Storage.newItem();
console.log(Storage.getItems());




storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


*/

/*8. ----------------------------------------------------------
Задание
Используя ключевое слово class объяви класс Car с пустым телом.
Тесты
    Объявлен класс Car с пустым телом.
    Результат вызова new Car() это пустой объект.*/
class Car {
  // Пустое тело класса
}
const car = new Car();



/*9. Задание ------------------------------------------------------------------------------------------------------------------------------------------
Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.
Тесты
    Объявлен класс Car.
    Конструктор класса принимает объект со свойствами brand, model и price.
    В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
    В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
    В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.*/
class Car {
  // Объявление публичных свойств
  brand;
  model;
  price;
         
  // Аналог функции-конструктора
  constructor({ brand, model, price }) {
    // Инициализация объявленных свойств
    this.brand = brand;
    this.model = model;
    this.price = price;
  }     
}


/*10. Задание ----------------------------------------------------------------------------------------------------------------------------------------------------------------
Добавь классу Car две метода.
    getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
    changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
Тесты
    Объявлен класс Car.
    Конструктор класса принимает объект со свойствами brand, model и price.
    Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
    Значение Car.prototype.getPrice это функция.
    Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
    Значение Car.prototype.changePrice это функция.
    У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода getPrice() вернет число 36000.
    У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.*/
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice () {
    return this.price;
  }
  
  changePrice(newPrice) {
    this.price = newPrice;
  }
}



/*11. Задание -----------------------------------------------------------------------------------------------------------------------------------------------
Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
    getBrand() - возвращает значение приватного свойства brand.
    changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
Тесты
    Объявлен класс Car.
    Свойство brand в классе Car объявлено приватным.
    Конструктор класса принимает объект со свойствами brand, model и price.
    В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { model: 'Q3', price: 36000 }.
    В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { model: 'X5', price: 58900 }.
    В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { model: 'Murano', price: 31700 }.
    У экземпляра нет публичного свойства brand.
    Метод getBrand() возвращает значение приватного свойства brand.
    Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.*/
class Car {
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand(brand) {
    return this.#brand;
  }
  
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}



/*12. Задача. Хранилище 2.0 ----------------------------------------------------------------------------------------------------------------------------------------------
Задание
Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
Тесты
    Объявлен класс Storage.
    Свойство items в классе Storage объявлено приватным.
    Конструктор класса принимает свойство items.
    Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
    Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
    Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
    В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
    Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
    У объекта storage нет свойства items.
    Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
    Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
    Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].*/
class Storage {
  #items;
  
  constructor( items ) {
    this.#items = items;
  }
  
  getItems() {
    return this.#items;
  }
  
  addItem(newItem) {
    this.#items.push(newItem);
  }
  
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



/*13. Задача. Конструктор строк 2.0 --------------------------------------------------------------------------------------------------------------------------------------
Задание
Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
Тесты
    Объявлен класс StringBuilder.
    Свойство value в классе StringBuilder объявлено приватным.
    Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.
    Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.
    Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.
    Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.
    В результате вызова new StringBuilder('.') значение переменной builder это объект.
    Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
    У объекта builder нет свойства value.
    Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.
    Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.
    Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.
    Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.*/
class StringBuilder {
  #value;
  
  constructor( value ) {
    this.#value = value;
  }
  
  getValue() {
    return this.#value;
  };

  padEnd(str) {
    this.#value += str;
  };

  padStart(str) {
    this.#value = str + this.#value;
  };

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  };
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='



/*14. Геттеры и сеттеры --------------------------------------------------------------------------------------------------------------------------------------
Задание
Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand.
Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.
Тесты
    Объявлен класс Car.
    В классе Car объявлено приватное свойство brand.
    В классе Car объявлено приватное свойство model.
    В классе Car объявлено приватное свойство price.
    Конструктор класса принимает объект со свойствами brand, model и price.
    В классе Car объявлен геттер brand.
    В классе Car объявлен сеттер brand.
    В классе Car объявлен геттер model.
    В классе Car объявлен сеттер model.
    В классе Car объявлен геттер price.
    В классе Car объявлен сеттер price.*/
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}



/*15. Статические свойства ------------------------------------------------------------------------------------------------------------------------------
Задание
Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно,
то перезаписывает цену автомобиля.
Тесты
    Объявлен класс Car.
    У класса Car есть статическое свойство MAX_PRICE.
    Значение статического свойства MAX_PRICE это число 50000.
    У экземпляра нет свойства MAX_PRICE.
    В классе Car объявлен геттер price.
    В классе Car объявлен сеттер price.
    У экземпляра класса Car вызов сеттера price, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price.
    У экземпляра класса Car вызов сеттера price, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price.*/
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE >= newPrice) {
      this.#price = newPrice;
    }
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000




/*16. Статические методы --------------------------------------------------------------------------------------------------------------------
Задание
Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
    Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
    В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).
Тесты
    Объявлен класс Car.
    У класса Car есть статический метод checkPrice(price).
    Вызов Car.checkPrice(36000) возвращает строку 'Всё хорошо, цена в порядке.'.
    Вызов Car.checkPrice(18000) возвращает строку 'Всё хорошо, цена в порядке.'.
    Вызов Car.checkPrice(64000) возвращает строку 'Внимание! Цена превышает допустимую.'.
    Вызов Car.checkPrice(57000) возвращает строку 'Внимание! Цена превышает допустимую.'.*/
class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    if (Car.#MAX_PRICE <= price) {
      return 'Внимание! Цена превышает допустимую.';
    } else {
      return 'Всё хорошо, цена в порядке.';
    }
  }
  price;
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}
const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.






class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
  AccessLevel;
}