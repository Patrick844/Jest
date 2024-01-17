function addProperty(key, value, obj) {
  obj[key] = value;
  return obj;
}

console.log(addProperty("b", 2, { a: 1 }));
module.exports = addProperty;
