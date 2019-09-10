let Person 
// функция-конструктор наших объектов

Person = function(name, age) {
    this.name = name;
    this.age = age;
};

// Добавляем в прототип нашего конструктора метод
Person.prototype.greeting = function() {
    console.log("Меня зовут " + this.name + ", и я пишу из родительского класса!!!");
}

// создаем объекты из нашего "класса"
let firstPerson = new Person("John", 23);
let secondPerson = new Person("Mary", 66);

firstPerson.greeting(); // "Меня зовут John, и я пишу из прототипа!!!"
console.log(secondPerson.constructor === Person); // true
