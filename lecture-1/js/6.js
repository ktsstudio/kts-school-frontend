var actor = {
  name: 'Joey',
  job: 'actor',
};

var chef = {
  name: 'Monica',
  job: 'chef'
};

function sayHi() {
  console.log('My name is ' + this.name);
}

// bind
hiFromJoey = sayHi.bind(actor);
hiFromJoey();

function introduce(hobby) {
  console.log('I am ' + this.job);
  console.log('I love ' + hobby);
}

introduce();  // undefined, undefined

job = 'programmer';
introduce('css');  // programmer, css

introduce.call(actor, 'food');  // actor, food
introduce.apply(chef, ['cleaning']);  // chef, cleaning