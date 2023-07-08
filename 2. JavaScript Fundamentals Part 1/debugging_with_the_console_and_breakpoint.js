const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10
  };

  console.table(measurement);

  const kelvin = measurement.value + 273
  return kelvin;
}

// console.log(measureKelvin());

const calcAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2)
  // console.log(temp);
  let max = temp[0]
  let min = temp[0]

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i]
    // console.log(curTemp);
    if (typeof curTemp !== "number") continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp

  }
  console.log(max, min);
  return max - min;
}

const amplitudeNew = calcAmplitudeNew([3, 5, 1], [9, 4, 5]);
console.log(amplitudeNew);