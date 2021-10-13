console.log(111111);
console.log(222222);
// setTimeout(() => console.log("aaaaaa"), 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));//Fetch asynchronous ভাবে কাজ করে । যার কারনে এটি সার্ভার থেকে ডেটা লোড হতে হতে এর নিচের ফাংশন গুলো বসে থাকে না। বরং কাজ করে। আর fetch এর কাজ শেষ হলে সে সবার পরে হলেও দেখাবে। 

console.log(333333);
console.log(444444);
console.log(544444);

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
