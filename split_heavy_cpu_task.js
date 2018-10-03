// let i = 0;
// let start = Date.now();
// function count() {
//   // do a piece of the heavy job
//   do {
//     i++;
//     // while checks if i is evenly divided by 1000000
//   } while (i % 1e6 != 0);

//   if (i === 1e9) {
//     alert('Done in: ' + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count, 0); // schedule the new call
//   }
// }

// count();

// Move Scheduling to beginning to save some time!
let i = 0;
let start = Date.now();
function count() {
  //scheduling
  if (i < 1e9 - 1e6) {
    setTimeout(count, 0); // schedule the new call
  }

  do {
    i++
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  }
}

count();