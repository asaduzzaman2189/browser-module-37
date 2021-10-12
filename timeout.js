//setTimeout এর কাজ হচ্ছে - কোড সাধারনত synchronous ভাবে চলে কিন্তু setTimeout ব্যবহার করলে সে তাকে সাইডে সরিয়ে রেখে তার সব কাজ শেষ করে তারপর setTimeout এর কাজ করবে বা কল করবে। যাকে asynchronous বলে।

function doSomething() {
  console.log("I am coding Javascript");
}
console.log("First: ami sobar age");
console.log("Second: I am the second person");
// setTimeout(doSomething, 5000); //setTimeout ব্যবহার করলে তা asynchronous ভাবে কাজ করে।  setTimeout () এ প্যারামিটার হিসাবে ফাংশনের পাশাপাশি কমা দিয়ে প্যারামিটার হিসেবে সময় নির্ধারন করে দেয়া যায়। অর্থাৎ কতক্ষন পর সেই ফাংশন কাজ করবে তা নির্ধারন করা হয়। আর এতা মিলিসেকেন্ড হিসেবে দেয়া হয়। 5 দিলে 5 মিলিসেকেন্ড বুঝাবে। আর ৫০০০ দিলে ৫ সেকেন্ড বুঝাবে।
setTimeout(function () {
  console.log("I am using VS Code");
}, 5000); // এখানে anonymous/arrow function ও বসানো যেতে পারে।
setTimeout(() => {
  console.log("Exploring MDN articles");
}, 4000); // এই ফাংশন আগের ফাংশনের আগেই কাজ করবে কারন সময় আগে নির্ধারন করা আছে।
console.log("Third: ami 3 number baccha");
console.log("Fourth: ami ek hali purno korsi");
