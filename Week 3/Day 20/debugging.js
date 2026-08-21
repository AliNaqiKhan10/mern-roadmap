// Ways to debug your code
// 1. Using console.log()
// 2. Using debugger statement
// 3. Using browser developer tools (F12)
// 4. Using try-catch blocks to handle errors
// 5. Using breakpoints in IDEs like VS Code

// 2. Using debugger statement
function findMax(numbers) {
  let max = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    debugger; // execution yahan ruk jayega (agar DevTools/VS Code debugger open ho)
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

findMax([3, 7, 2, 9, 4]);