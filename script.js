var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
for (var time of timeOfDay) {
  console.log(`It is ${time}.`);
}
// It is 6.
// It is noon.
// It is 8.
// It is morning.
// It is evening.
// It is 12.

timeOfDay.forEach(function (time, index) {
  console.log(`The ${time} element is at position ${index}.`);
});
// The 6 element is at position 0.
// The noon element is at position 1.
// The 8 element is at position 2.
// The morning element is at position 3.
// The evening element is at position 4.
// The 12 element is at position 5.

var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];
var adultAges = employeeAges.filter(function (item) {
  return item >= 18;
});
console.log(adultAges);
// (6) [36, 78, 25, 42, 19, 18]

var lastName = [
  "Chambers",
  "Chamberlain",
  "Chamberlin",
  "Jones",
  "Webster",
  "Willits"
];
var chamberName = lastName.filter(function (item) {
  return item.includes("Chamber");
});
console.log(chamberName);
//(3) ["Chambers", "Chamberlain", "Chamberlin"]