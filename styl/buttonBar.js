import favoriteButton from 'favoriteButton';
import retrieveButton from 'retrieveButton';

const favoriteMessage = Picture.template($ => ({
	top: 5, left: 0, right: 0, height: 40,
	url: 'assets/addedToFavorites.png',
	active: true,
	behavior: Behavior({
		onTouchEnded: function(container) {
			container.bubble('revert');
		}
	})
}));

const retrieveMessage = Picture.template($ => ({
	top: 5, left: 0, right: 0, height: 40,
	url: 'assets/readyForPickup.png',
	active: true, 
	behavior: Behavior({
		onTouchEnded: function(container) {
			container.bubble('revert');
		}
	})
}));

const buttonBar = Line.template($ => ({
    top: 0, left: 0, right: 0, height: 50,
    contents: [
        favoriteButton({ itemList: $.itemList }),
        retrieveButton({ itemList: $.itemList })
    ],
    behavior: Behavior({
    	onCreate: function(container, data) {
    		this.itemList = $.itemList;
    	},
    	displayFavoriteMessage: function(container) {
    		container.remove(container[1]);
    		container.replace(container[0], favoriteMessage());
    		container.bubble('reloadFavorites');
    	},
    	displayRetrieveMessage: function(container) {
    		container.remove(container[1]);
    		container.replace(container[0], retrieveMessage());
    	},
    	revert: function(container) {
    		trace('hi\n');
    		container.replace(container[0], favoriteButton({ itemList: this.itemList }));
    		container.add(retrieveButton({ itemList: this.itemList }));
    	}
    })
}));

export default buttonBar;
