// 1. Basic log
console.log("Simple message");

// 2. Different levels — browser/VS Code terminal mein alag color show hote hain
console.info("Ye info hai");
console.warn("Ye warning hai - kuch check karlo");
console.error("Ye error hai - kuch galat hai");

// 3. Object ya array ko table format mein dekhna (bohat useful!)
const students = [
  { name: "Ali", age: 23, city: "Karachi" },
  { name: "Sara", age: 21, city: "Lahore" }
];
console.table(students);

// 4. Grouping logs — jab bohat sara data ek sath print karna ho
console.group("User Details");
console.log("Name: Ali");
console.log("Age: 23");
console.groupEnd();

// 5. Time kitna laga koi function run hone mein
console.time("loopTime");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loopTime"); // "loopTime: 5.2ms" jaisa output dega

// 6. Kitni baar function/line call hui
function greet() {
  console.count("greet called");
}
greet();
greet();
greet();
// Output: greet called: 1, greet called: 2, greet called: 3

// 7. Condition check — agar false ho to hi error show hoga
const age = 15;
console.assert(age >= 18, "User is a minor!");

// 8. Trace — pata karna function kahan se call hua (call stack)
function a() { b(); }
function b() { console.trace("Trace yahan se"); }
a();