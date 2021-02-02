//  глобальный контекст
console.log(this === window);  // в браузере
console.log(this === global);  // в Node

var a = 12;
console.log(window.a === a);

// потеря контекста
var actor = {
  name: 'Joey',
  job: 'actor',
  sayHi: function () {
    console.log('Hi, it is ' + this.name);
  },
};

actor.sayHi(); // 'Hi, it is Joey'
setTimeout(actor.sayHi, 1000); // 'Hi, it is undefined'

//  контекст внутри функции
var chef = {
  name: 'Monica',
  job: 'chef'
};

function introduce() {
  console.log('I am ' + this.job);
}

actor.introduce = introduce;
chef.introduce = introduce;

introduce();  // I am undefined

job = 'programmer';
introduce();  // I am programmer

actor.introduce();  // I am actor
chef.introduce();  // I am chef

