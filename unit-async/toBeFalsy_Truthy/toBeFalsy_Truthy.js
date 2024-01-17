function checkFalsyTruthy(value) {
  if (value < 10) {
    return "";
  }
  return "hello";
}

module.exports = checkFalsyTruthy;
