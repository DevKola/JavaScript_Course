// Example: [17, 21, 23] wiil print "... 17℃ in 1 day ... 21℃ in 2 days ... 23℃ in 3days ..."
//  i need the array, I need a number that will keep increasing, as i'm looping through the array, the number will also increase. my output will be a string

const printForecast = function (arr) {
  let days = 0;
  let output = "";
  let forecastMessage = "";
  let dots = "...";

  for (let i = 0; i < arr.length; i++) {
    days++;

    if (days <= arr.length) {
      forecastMessage = `${dots} ${arr[i]}℃ in ${days} days `;
      output += forecastMessage;
    }
    if (days === arr.length) output += `${forecastMessage}${dots}`;
  }
  return output;
};

// Test Datas
// [17, 21, 23], [12, 5, -5, 0, 4]

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
