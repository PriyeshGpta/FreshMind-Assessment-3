const mapObject = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const addPrefix = value => `Mr. ${value}`;

console.log(mapObject(testObject, addPrefix)); 