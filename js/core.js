var Core = function() {
	return {
		chrome_frame_load: this.chrome_frame_load,
		initialize: this.initialize
	};
};
	
Core.prototype = {
	core_selector: '',
	isChromeFrameAPILoad: false,
	canvas: null,
	canvas_width: 0,
	canvas_height: 0,	
	engine: null,
	
	chrome_frame_load: function() {
		if (this.isChromeFrameAPILoad) {
			$(this.core_selector).append('<div id="crome_frame"></div>')
			CFInstall.check({
				mode: 'inline',
				node: 'crome_frame'
			});					
		} else {				
			// асинхроная загрузка Chrome Frame API
			var script = document.createElement('script'),
				self = this;
			
			script.type = 'text/javascript';
			script.src = 'http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js';
			script.onload = script.onreadystatechange = function () {
				if ((!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
					self.isChromeFrameAPILoad = true;						
					self.initialize(self.core_selector);
				}
			};
			document.body.appendChild(script);
		}
	},
	
	initialize: function(element) {
		this.core_selector = element;
		element = $(element);
		
		if (element.length) {		
			var testCanvas = document.createElement('canvas');
						
			if (!testCanvas.getContext) {
				this.chrome_frame_load();
				return false;
			}

			this.canvas_width = element.width();
			this.canvas_height = element.height();
			
			this.canvas = $('<canvas width="' + this.canvas_width + '" height="' + this.canvas_height + '"></canvas>')
			this.canvas.appendTo(element);	
			
			this.engine = new Engine();
			this.engine.initialize(this.canvas.get(0).getContext('2d'), this.canvas_width, this.canvas_height);			
		}
	}
	
};

// Расширяем объект массива
$A = Array.from = function(iterable) {
	if (!iterable) {
		return [];
	}
	if (iterable.toArray) {
		return iterable.toArray();
	} else {
		var results = [];
		for (var i = 0, length = iterable.length; i < length; i++) {
			results.push(iterable[i]);
		}
		return results;
	}
};

// Расширяем прототип функции для добавления передачи контекста через .bind()
$.extend( Function.prototype, {
	bind: function() {
		var __method = this, args = $A(arguments), object = args.shift();
		return function() {
			return __method.apply(object, args.concat($A(arguments)));
		};
	}
});

// Расширяем прототип функции для реализации наследования
Function.prototype.inheritsFrom = function(superClass) {
	var Inheritance = function(){};
	Inheritance.prototype = superClass.prototype;

	this.prototype = new Inheritance();
	this.prototype.constructor = this;
	this.superClass = superClass;
}




