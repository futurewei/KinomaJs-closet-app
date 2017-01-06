import * as style from 'style';
import * as items from 'items';

const favoriteButtonImg = Picture.template($ => ({
    left: 11, right: 22, top: 5, height: 40,
    url: 'assets/favoritesButton.png'
}));

const favoriteButton = Column.template($ => ({
    left: 0, right: 0, top: 0, height: 50,
    active: true,
    contents: [
        favoriteButtonImg()
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            this.itemList = $.itemList;
        },
        onTouchEnded: function(container) {
            for (let i = 0; i < this.itemList.length; i += 1) {
                items.favoriteItem(this.itemList[i]);
            }
            container.bubble('displayFavoriteMessage');
            //Change button
        }
    })
}));

export default favoriteButton;