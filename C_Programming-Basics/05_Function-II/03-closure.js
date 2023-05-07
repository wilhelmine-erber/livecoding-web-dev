function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it

	function add(y) {
		return y + x;
	};

	return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
const plusOne = makeAdder(1);

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
const plusTen = makeAdder(10);

plusOne(3);		// 4  <-- 1 + 3
plusOne(41);	// 42 <-- 1 + 41
plusTen(13);	// 23 <-- 10 + 13


// ------------------ //
function init() {
	const name = "Mozilla"; 			// name is a local variable created by init
	function displayName() { 		// displayName() is the inner function, a closure
		console.log(name); 			// displayName() uses variable declared in the parent function    
	}
	displayName();
}
init();

// ------------------ //

function makeTitler(x) {
	function title(y) {
		return `${x} ${y}`;
	};

	return title;
}


const mrTitle = makeTitler("Mr.");
const msTitle = makeTitler("Ms.");

msTitle("Lara");
mrTitle("David");
makeTitler("Dr.")("John");
makeTitler("Prof.")("John");

// ---------------------------------- //

// https://jsfiddle.net/vnkuZ/7726/?utm_source=website&utm_medium=embed&utm_campaign=vnkuZ