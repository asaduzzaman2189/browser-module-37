// setTimeout এর খালাতো ভাই হচ্ছে setInterval. setTimeout একবার চলেছিল কিন্তু setInterval বার বার চলে, এটি আর বন্ধ হবে না। এটিকে বন্ধ করতে হলে টার্মিনালে গিয়ে ctrl+c চাপতে হবে। setInterval রিটার্ন করে একটি আইডি দেয় যা time id. আর সেই আইডিকে বন্ধ করলেও ফাংশন কাজ করা বন্ধ করবে।

console.log("first");
/* const timeIntervalId = setInterval(() => {
  console.log("tik tik tik tik");
}, 1000); */

let seconds = 0;

const timeId = setInterval(() => {
  // seconds++;
  console.log(++seconds);
  if (seconds > 5) {
    clearInterval(timeId); // function কে stop করার জন্য clearInterval() এর ভিতরে ঐ ফাংশনের নাম দিতে হবে।
  }
}, 1000);

console.log("second");

//javascript হচ্ছে non blocking,
