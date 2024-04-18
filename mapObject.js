function mapObject(obj, cb) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = cb(obj[key]);
        }
    }
    return newObj;
}

module.exports = mapObject;
