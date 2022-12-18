
const convertString = (letter) => {
	return `${letter.charAt(0).toUpperCase()}${letter.slice(1)}`;
}
console.log(convertString('test'));