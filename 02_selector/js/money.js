let m = +prompt('сколько у вас с собой денег?');
let a = +prompt('сколько вы купили яблок?');
let b = +prompt('сколько вы купили батонов?');
let p1 = +prompt('сколько стоит одно яблоко?');
let p2 = +prompt('сколько стоит один батон?');

function haveEnough() {
	if (m - a*p1 - b*p2 > 0) {
		return 'Вам хватает денег на покупки';
	}
	else { return 'Вам не хватает денег'};
}

document.body.innerHTML = haveEnough();
// console.log(haveEnough());
// window.alert(haveEnough());