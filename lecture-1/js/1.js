console.log(typeof 1)  
console.log(typeof 10.5) 
console.log(typeof NaN)  
console.log(typeof Infinity)  

console.log(typeof 'string')  
console.log(typeof "string")  
console.log(typeof `string ${1}`)  

console.log(typeof true)  
console.log(typeof false)  

console.log(typeof null)  

console.log(typeof undefined)  

console.log(typeof [])  
console.log(typeof {})  
console.log(typeof function foo() {})

console.log(String(true))  // 'true'
console.log(String(1))  // '1'
console.log(String(undefined))  // undefined
console.log(String({}))  // [object Object]

console.log('10' / '2')  // 5
console.log(+'12')  // 12
console.log(Number('1'))  // 1
console.log(Number('Привет'))  // NaN
console.log(Number(null))  // 0
console.log(Number(undefined))  // NaN

console.log(Boolean(''))  // false
console.log(Boolean(0))  // false
console.log(Boolean('0'))  // true
console.log(Boolean('false'))  // true
console.log(Boolean(undefined))  // false



