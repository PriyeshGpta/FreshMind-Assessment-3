const defaults = require('../defaults');
const testObject = { name: 'Bruce Wayne', age: 36 };

const defaultProps = { name: 'Batman', location: 'Gotham' };

console.log(defaults(testObject, defaultProps)); 
