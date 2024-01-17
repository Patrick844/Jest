function checkNumber(value) {
  if (parseInt(value) || parseFloat(value)) {
    return true;
  } else {
    throw new Error("This is not a number");
  }
}

module.exports = checkNumber;
