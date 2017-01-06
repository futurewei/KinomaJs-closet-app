import {
    VerticalScroller,
    VerticalScrollbar,  
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';
import * as style from 'style';
import itemDescription from 'itemDescription';

const CARD_HEIGHT = 119;

const itemCard = Column.template($ => ({
    top: 30, left: 10, right: 10, height: CARD_HEIGHT,
    active: true,
    contents: [
        $.item.img({ height: CARD_HEIGHT })
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            this.changeScreen = $.changeScreen;
            this.item = $.item;
        },
        onTouchEnded: function(container) {
            this.changeScreen(itemDescription({ item: this.item }))
        }
    })
}));

function createListContents(list, changeScreen) {
    /*CREATES A TWO COLUMN LIST OF ITEMS*/
    const contents = [];
    for (let i = 0; i < list.length - 1; i += 2) {
        const row = new Line({
            left: 5, right: 5, top: 5, height: CARD_HEIGHT,
            contents: [
                itemCard({ item: list[i], changeScreen }),
                itemCard({ item: list[i + 1], changeScreen })
            ]
        });
        contents.push(row);
    }
    if (list.length % 2 == 1) {
        const last_row = new Line({
            left: 5, right: 5, top: 5, height: CARD_HEIGHT,
            contents: [
                itemCard({ item: list[list.length - 1], changeScreen }),
                new Picture({ url: 'assets/blank.png', top: 30, left: 10, right: 10, height: 119 })
            ]
        });
        contents.push(last_row);
    }
    return contents;
}

const listResults = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: createListContents($.list, $.changeScreen)
}));

const listView = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        VerticalScroller($, { 
            active: true, top: 50, bottom: 0,
            contents: [
                listResults({ list: $.list, changeScreen: $.changeScreen }),
                VerticalScrollbar(), 
                TopScrollerShadow() 
            ]                     
        })
    ]
}));

export default listView;