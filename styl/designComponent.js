const button = Picture.template($ => ({
	left: 0, right: 0, top: 0, bottom: 0,
	url: 'assets/' + $.type + 'Button.png',
	active: true,
	behavior: Behavior({
		onCreate: function(container, data) {
			this.type = $.type
		},
		onTouchEnded: function(container) {
			container.bubble($.type + '');
		}
	}) 
}));

const designComponent = Line.template($ => ({
	left: 0, right: 0, top: 0, bottom: 0,
	contents: [
		button({ type: 'prev' }),
		new Label({ string: 'placeholder' }),
		button({ type: 'next' })
	],
	behavior: Behavior({
		onCreate: function(container, data) {
			this.itemsList = $.itemsList;
			this.row = $.row;
			this.index = 0;
			this.container = container;
			this.update(container);
		},
		next: function() {
			this.index = (this.index + 1) % this.itemsList.length;
			this.update(this.container);
		},
		prev: function() {
			this.index = (this.index + 1) % this.itemsList.length;
			this.update(this.container);
		},
		update: function(container) {
			trace(container[1] + '\n');
			container.replace(container[1], this.itemsList[this.index].img());
			container.bubble('updateItems', this.index, this.row);
		}
	})
}));

export default designComponent;