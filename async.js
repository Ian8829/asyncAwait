const Bluebird = require('bluebird');

async function main() {
  const x = await 42;
  console.log(x);
}

// main();

async function working() {
  console.log('Working...');
  await Bluebird.delay(3000);
  console.log('Done');
}

working();