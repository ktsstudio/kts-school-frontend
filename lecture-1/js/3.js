var person = {
  name: 'Ross',
  surname: 'Geller',
  age: 30,
  job: {
    speciality: 'Paleontologist',
    salaryPerDay: 100,
    workingDaysPerWeek: 5,
    weekSalary: function () {
      return this.salaryPerDay * this.workingDaysPerWeek;
    },
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

// обращение к свойствам
console.log(person.name);
console.log(person['age']);
console.log(person.job);
console.log(person.job.weekSalary());
console.log(person.fullName);

// проверка существования свойства
console.log(person.girlfriend);
console.log('girlfriend' in person);
console.log(person.hasOwnProperty('girlfriend'));

// добавление свойства
person.girlfriend = 'Rachel Green';
console.log(person.girlfriend);

// удаление свойства
delete person.girlfriend;
console.log(person.girlfriend);

// массив ключей
console.log(Object.keys(person));

// массив значений
console.log(Object.values(person));

// массив [ключ, значение]
console.log(Object.entries(person));

// итерация
for (property in person) {
  console.log(property);
}


