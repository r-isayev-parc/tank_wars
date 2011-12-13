var Point = function(x, y) {
	/*var args = arguments;
	
	if (atom.typeOf(x) == 'arguments') {
		args = x;
		x = args[0];
		y = args[1];
	}
	if (args.length != 2) {
		if (x && x[0] !== undefined && x[1] !== undefined) {
			y = x[1];
			x = x[0];
		} else if (x && x.x !== undefined && x.y !== undefined) {
			y = x.y;
			x = x.x;
		} else {
			return null;
		}
	}
	this.x = x == null ? null : Number(x);
	this.y = y == null ? null : Number(y);
	return this;*/
};
	
Point.prototype = {	
	x: 0,
	y: 0	
};

