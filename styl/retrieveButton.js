import * as style from 'style';
import * as items from 'items';

const retrieveButtonImg = Picture.template($ => ({
    left: 11, right: 22, top: 5, height: 40,
    url: 'assets/retrieveButton.png'
}));

const retrieveButton = Column.template($ => ({
    left: 0, right: 0, top: 0, height: 50,
    active: true,
    contents: [
        retrieveButtonImg()
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            this.itemList = $.itemList;
        },
        onTouchEnded: function(container) {
            for (let i = 0; i < this.itemList.length; i += 1) {
                const item = this.itemList[i];
                items.retrieveItem(item);
            }
            container.bubble('displayRetrieveMessage');
            //Change button
        }
    })
}));

export default retrieveButton;