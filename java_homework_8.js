let myMap = new Map();
myMap.set('раз', '1');
myMap.set('два', '2');
myMap.set('три', '3');
for (let [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}