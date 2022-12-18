

const calculate = (summary,count,str) => {
	if(count > 10) {
	 let res1 = (summary * 0.97)
		return console.log(res1);
	}

	if(summary > 30000) {
		let difference = (summary - 30000) * 0.85
		return console.log(difference);
	}

	if(str === 'METHED') {
		let res2 = (summary * 0.90)
		return console.log(res2);
	}

	if(str === 'G3H2Z1' && summary > 2000) {
		let res3 = (summary - 500)
		return console.log(res3);
	}


}

calculate(3000,2,'METHED');