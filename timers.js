//the program uses timeout and timeinterval
// both runs parallely first timeinterval runs one time and waits for 1,then second timeinterval executed
// and waits for 5 seconds in mean  time timeinterval funciton waits for one second and executes 5 time
//after that timeout gets executed


const timer = 5000;
const outputInterval = 1000;
let val = 0;

process.stdout.write(`${timer/outputInterval} seconds delay\n`);

const ready = () => {
   output("Ready\n");
   clearInterval(myInt);
};

const counter = () => {
  val++;
  output(`${(timer/1000)-val} seconds left`);  
};

const output = (mes) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(mes);
};

const myInt = setInterval(counter, outputInterval);
setTimeout(ready, timer);