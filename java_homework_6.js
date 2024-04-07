let array = [1, 1, 1, 3];
var k = 0;
for (let i = 0; i < array.length; i = i+1) {
  if (array[0]===array[i]) {
    k=k+1;
  }
  else {
    k=k-1;
  }
}
if (k==array.length) {
  console.log('true');
} else {
  console.log('false');
}
