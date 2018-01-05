function drawTree(h) {
	for ( i = 1 ; i <= h ; i++) {
		var star ="";
		for ( j = 1 ; j <= i ; j++){
			star +='*';
		}
		console.log(star);
	}
}

drawTree(5);



