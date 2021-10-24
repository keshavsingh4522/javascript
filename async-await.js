// Basic understanding for async-await, experiment!

// waiting for value
const wait = (time) => {
  // setTimeout doesnt return promise so need to return one
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(time);
      resolve();
    }, time);
  });
};

const firstTimeout = async (f) => {
  console.log("run 1");
  return await wait(f);
};

const secondTimeout = async () => {
  console.log("run 2");
  await wait(2000);
  return 2000;
};

const thirdTimeout = async () => {
  console.log("run 3");
  await wait(3000);
  return 1000;
};

const main = async () => {
  console.log("hi"); // print first
  // wait for value to use
  // https://stackoverflow.com/questions/48617486/why-async-await-doesnt-work-in-my-case
  // await only suspends when the value passed to it is a Promise.
  // In your case, setTimeout returns a Number so await doesn't wait for it.
  let f = await thirdTimeout();
  let s = await firstTimeout(f);
  secondTimeout(s);
  console.log("test"); // print last
};
main();
