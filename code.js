function countCartPrice(price){
	var sum = 0
	for(let item of price){
		sum += item
	}
	return sum
}

let products = new Array(110, 150, 20, 2345, 470)
alert("Стоимость корзины: " + countCartPrice(products))