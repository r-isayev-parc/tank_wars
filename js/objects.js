var GameObject = function() {
	return {
		init: this.init.bind(this),
		draw: this.draw.bind(this),
		update: this.update.bind(this)
	};
};
	
GameObject.prototype = {
	position: {
		x: 0,
		y: 0	
	},
	
	draw: function(ctx, ctx_width, ctx_height) {
		ctx.beginPath();
		ctx.fillStyle = '#458935';
		ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI*2, true);
		ctx.stroke();
		ctx.fill(); 
		ctx.closePath();
	},
	
	update: function() {
		/*this.position.x = mouse.x;
		this.position.y = mouse.y;*/
	},
		
	init: function(x, y) {
		this.position.x = x;
		this.position.y = y;
	}
	
};

// ------------------------------------



