var GameObject = function(x, y) {
	this.position.x = x;
	this.position.y = y;
	alert(this.position.x + ' / ' +  this.position.y);
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
	}
	
};

// ------------------------------------

var Test = function(x, y) {
	this.position.x = x;
	this.position.y = y;
};

Test.inheritsFrom(GameObject);
$.extend( Test.prototype, {

	draw: function(ctx, ctx_width, ctx_height) {
		ctx.beginPath();
		ctx.fillStyle = '#458935';
		ctx.arc(this.position.x, this.position.y, 30, 0, Math.PI*2, true);
		ctx.stroke();
		ctx.fill(); 
		ctx.closePath();
	},
		
	draw2: function(ctx, ctx_width, ctx_height) {
		ctx.beginPath();
		ctx.fillStyle = '#547609';
		ctx.arc(this.position.x, this.position.y+30, 30, 0, Math.PI*2, true);
		ctx.stroke();
		ctx.fill(); 
		ctx.closePath();
	}
});
	





