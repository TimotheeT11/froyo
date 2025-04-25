// prompt the user for froyo flavors and store their input
const promptFroyo = prompt("enter a list of comma-separated froyo flavor", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Parse the user input into an array of froyo flavors
const inputFroyo = promptFroyo.split(",");

// Create an object to track which flavors and update the object as you iterate through the array of flavors
/**
 * Tracks froyo flavors and the number of occurrences of each froyo flavor inputted.
 * @example
 * trackFroyoFlavors(["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]);
 * // Returns {vanilla: 3, strawberry: 1, coffee: 2}
 * @param {string[]} flavors an array of froyo flavors
 * @returns {object} an object that tracks flavors inputted (keys) and how many times they were inputted (values)
 */
function trackFroyoFlavors (flavors) {
  const froyo = {};
  for (let i = 0; i < flavors.length; i++) {
  if (!(flavors[i] in froyo)) {
    froyo[flavors[i]] = 1;
  } else {
    froyo[flavors[i]]++;
  }
  }
  return froyo;
}

// Display the result
console.log(inputFroyo);
console.log(trackFroyoFlavors(inputFroyo));