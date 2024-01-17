function forEach(data, callback) {
  for (const items of data) {
    callback(items);
  }
}

function display(data) {
  console.log(data);
}

forEach([0, 1], display);
module.exports = forEach;
