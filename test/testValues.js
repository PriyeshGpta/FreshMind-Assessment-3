const values = require('../values');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', sayHello: function() { console.log('Hello!'); } };

console.log(values(testObject)); 