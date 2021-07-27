const spinMark = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\'];

let iterator = 100;
for (const char of spinMark) {
  setTimeout(() => {
    process.stdout.write(char);
  }, iterator += 200)
};

setTimeout(() => {
  process.stdout.write('\n')
}, 1700);