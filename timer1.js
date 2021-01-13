const alarm = function(times) {
  if (times === undefined) {
    return "invalid time: enter one or more numbers";
  }
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] !== NaN && arguments[i] > 0)
    setTimeout(() => {
      process.stdout.write(`\x07 \r\n ALARM: ${arguments[i]} SECONDS`);
    }, time = arguments[i] * 1000);
  }
}

alarm(10, 3, 5, 15, 9);
// process.stdout.write('\x07');