const makeChange = (c) => {
  // your name here
	et quarters = Math.floor(c/25);
  c = c %25;
  let dimes =Math.floor(c/10);
    c = c %10;
    let nickels = Math.floor(c/5);
    c = c %5;
    let pennies = c;  
    return {q: quarters, d: dimes, n: nickels, p: pennies};

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
