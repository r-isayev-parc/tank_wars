var Engine = function() {
	return {
		initialize: this.initialize
	};
};
	
Engine.prototype = {
	ctx: null,
	ctx_width: 0,
	ctx_height: 0,
	
	initialize: function(ctx, ctx_width, ctx_height) {
		this.ctx = ctx;
		this.ctx_width = ctx_width;
		this.ctx_height = ctx_height;
		
		var go = new GameObject(250, 50);
		go.draw(ctx, ctx_width, ctx_height);
		
		var t = new Test(50, 50);
		t.draw(ctx, ctx_width, ctx_height);	
		t.draw2(ctx, ctx_width, ctx_height);		
	}
	
};

