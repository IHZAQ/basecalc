function ott(int) {
	if (int > 9) return 9;
	return int
}
window.addEventListener("DOMContentLoaded", () => {
	const base1 = document.getElementById("base")
	const base2 = document.getElementById("base1")
	const base3 = document.getElementById("base2")
	base1.value = "10"
	base2.value = "10"
	base3.value = "2"
	const input1 = document.getElementById("num1")
	const input2 = document.getElementById("num2")
	const input3 = document.getElementById("num3")
	document.getElementById("solve").onclick = () => {
		const base = parseInt(base1.value)
		const num1 = parseInt(input1.value, base)
		const num2 = parseInt(input2.value, base)
		const op = document.getElementById("operation").value
		let answer
		switch (op) {
			case "+":
				answer = (num1 + num2).toString(base);
				break;
			case "-":
				answer = (num1 - num2).toString(base);
				break;
			case "*":
				answer = (num1 * num2).toString(base);
				break;
			case "/":
				answer = (num1 / num2).toString(base);
		}
		document.getElementById("answer").innerText = answer.toUpperCase()
	}

	document.getElementById("convert").onclick = () => {
		const converted = parseInt(input3.value, parseInt(base2.value))
		document.getElementById("converted").innerText = converted.toString(parseInt(base3.value)).toUpperCase();
	}
	const hex = ["", "-b", "-c", "-d", "-e", "-f"]
	window.addEventListener("input", (e) => {
		function check(b) {
			const num = parseInt(b.value);
			const oten = (num > 10) ? `a${hex[num - 11]}` : "";
			const regex = new RegExp(`^0+|[^0-${ott(num - 1)}${oten}]+`, "gi")
			e.target.value = e.target.value.toUpperCase().replace(regex, "");
		}
		switch (e.target.id) {
			case "num1":
			case "num2":
				check(base1)
				break;
			case "num3":
				check(base2)
		}
	})
	window.addEventListener("change", (e) => {
		if (e.target.tagName !== "SELECT") return;
		switch (e.target.id) {
			case "base":
				const num = parseInt(base1.value);
				const oten = (num > 10) ? `a${hex[num - 11]}` : "";
				const regex = new RegExp(`[^0-${ott(num - 1)}${oten}]+`, "gi")
				input1.value = input1.value.replace(regex, "").replace(/^0+/g, "")
				input2.value = input2.value.replace(regex, "").replace(/^0+/g, "")
				break;
			case "base1":
				const num2 = parseInt(base2.value);
				const oten2 = (num2 > 10) ? `a${hex[num2 - 11]}` : "";
				const regex2 = new RegExp(`[^0-${ott(num2 - 1)}${oten2}]+`, "gi")
				input3.value = input3.value.replace(regex2, "").replace(/^0+/g, "")
		}
	})
})