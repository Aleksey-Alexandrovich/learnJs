
const dollar = 73;
const euro = (dollar * 1.2);
console.log(euro);

const converterMoney = (summary) => {
	let rubl = (summary * euro);
	return rubl;
}

console.log(converterMoney(100));
