const currentValue = 777;
if (typeof currentValue === "number") {
	const result = currentValue
	%2 === 0 ? "Четное число" : "Нечетное число";
	console.log(result);
} else {
	console.log("Это вообще не число");
}