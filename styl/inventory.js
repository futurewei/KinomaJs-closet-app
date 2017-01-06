import {
    inventoryItems,
    allItems
} from 'items';
import * as style from 'style';
import topbar from 'topbar';
import {
    VerticalScroller,
    VerticalScrollbar,  
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';
import {
    FieldScrollerBehavior,
    FieldLabelBehavior
} from 'field';
import {
    SystemKeyboard
} from 'keyboard';
import * as favorites from 'favorites';

const CARD_HEIGHT = 150;
const SIDE = 30;
const TOP0 = 212;
const TOP1 = TOP0 + 142 + 12;

/*DON'T TOUCH ANYTHING ABOVE*/

import listView from 'listView';
let filteredInventoryItems = inventoryItems;

let smallStyle = new Style ({font: '20px', color: 'black'});
var tagLabel = new Label({top: 50, left: 0, right: 0, style: smallStyle, string: ""});

let nameInputSkin = new Skin({ borders: { left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray' });
let fieldStyle = new Style({ color: 'black', font: 'bold 24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldHintStyle = new Style({ color: '#aaa', font: '24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });
let searchText = "";
const searchField = Container.template($ => ({ 
    top: 110, left: 40,width: 250, height: 30, skin: nameInputSkin, contents: [
        Scroller($, { 
            left: 4, right: 4, top: 4, bottom: 4, active: true, 
            Behavior: FieldScrollerBehavior, clip: true, 
            contents: [
                Label($, { 
                    left: 0, top: 0, bottom: 0, skin: fieldLabelSkin, 
                    style: fieldStyle, anchor: 'NAME',
                    editable: true, string: $.name,
                    Behavior: class extends FieldLabelBehavior {
                        onEdited(label) {
                            let data = this.data;
                            data.name = label.string;
                            label.container.hint.visible = (data.name.length == 0);
                            trace(data.name+"\n");
                            searchText = data.name;
                        }
                        pressedEnter() {
                            changeScreen(defaultPage({ allItems: filteredListView(searchText) }));
                        }
                    },
                }),
                Label($, {
                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,
                    string: "Search", name: "hint"
                }),
            ]
        })
    ]
}));

function updateInventory() {
    filteredInventoryItems = inventoryItems;
}

function firstPage() {
    filteredInventoryItems = inventoryItems;
    return defaultPage({ allItems: filteredListView() });
}

function filteredListView(text) {
    if (text === undefined) {
        filteredInventoryItems = inventoryItems
    } else {
	    text = text.toLowerCase();
        filteredInventoryItems = inventoryItems.filter(element => { return element.category == text || element.tags.includes(text) });
    }
    return listView({ list: filteredInventoryItems, changeScreen})
}

let defaultPage = Column.template( $ => ({
    left: 0, right: 0, top: 0, bottom: 0, active:true, skin:style.backgroundSkin,
    contents: [
        filterButton(),
        $.allItems
    ]
}));
let filterButton = Container.template ( $ => ({
    left: 0, right: 0, top: 0, height: 50, active:true, skin:style.backgroundSkin,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            changeScreen(filterPage)
        }
    },
    contents: [
        new Picture({top: 0, bottom: 0, height: 50, url: "assets/filterButton.png"})
    ]
}));
let tagButton = new Container ({
    left: 0, right: 0, top: 0, bottom: 0, active: true, skin:style.backgroundSkin,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            changeScreen(firstPage());
        }
    },
    contents: [
        new Picture({top: 0, bottom: 0, height: 500, url: "assets/filterTagButton.png"}),
        tagLabel
    ]
});
let topsButton = new Container ({
    top: TOP0, left: SIDE, width: 142, height: 142, active:true,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            tagLabel.string = 'Tops',
            changeScreen(defaultPage({ allItems: filteredListView('Tops') }));
        }
    },
    contents: [
    ]
});
let bottomsButton = new Container ({
    top: TOP1, left: SIDE, width: 142, height: 142, active:true,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            tagLabel.string = 'Bottoms',
            changeScreen(defaultPage({ allItems: filteredListView('Bottoms') }));
        }
    },
    contents: [
    ]
});
let accessoriesButton = new Container ({
    top: TOP0, right: SIDE, width: 142, height: 142, active:true,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            tagLabel.string = 'Accessory',
            changeScreen(defaultPage({ allItems: filteredListView('Accessory') }));

        }
    },
    contents: [
    ]
});
let footwearButton = new Container ({
    top: TOP1, right: SIDE, width: 142, height: 142, active:true,
    Behavior: class extends Behavior {
        onCreate(container, data) {
        }
        onTouchBegan(container) {
        }
        onTouchEnded(container) {
            tagLabel.string = 'Footwear',
            changeScreen(defaultPage({ allItems: filteredListView('Footwear') }));
        }
    },
    contents: [
    ]
});

const searchButton = Container.template($ => ({
    left: 300, top: 110, height: 40, width: 40,
    active:true,
    behavior: Behavior({
        onTouchEnded: function(container) {
            changeScreen(defaultPage({ allItems: filteredListView(searchText) }));
        }
    })
}));

let filterPage = new Container({
    left: 0, right: 0, top: 0, bottom: 0, active:true, skin: style.backgroundSkin,
    contents: [
        new Picture({top: 0, bottom: 0, left: 0, right: 0, url: "assets/filterScreen.png"}),
        new Container({
            top: 0, bottom: 0, left: 0, right: 0,
            contents: [
                searchField({ name: "" }),
                topsButton,
                bottomsButton,
                accessoriesButton,
                footwearButton,
                searchButton()
            ]
        })
    ]
});

/*DON'T TOUCH BELOW HERE*/

/*Changes the tabview to newScreen, where newScreen is some sort of container.
 * Note that newScreen is not a template, it is an actual container.
 */
function print(str) {
    trace(str + '\n');
}

function reloadPage() {
    while (states.length > 0) {
        states.pop();
    }
    changeScreen(firstPage());
}

function changeScreen(newScreen) {
    states.push(newScreen);
    screen.replace(currScreen, newScreen);
    currScreen = newScreen;
    if (states.length == 2) {
        screen[0][1].visible = true;
        screen[0][1].active = true;
    }
}

function back() {
    if (states.length == 2) {
        reloadPage();
    }
    if (states.length > 1) {
        states.pop();
        changeScreen(states.pop());
        return states.length > 1;
    }
    return false;
}

let currScreen = firstPage();
const states = [currScreen];

const screen = new Column({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        topbar({ back }),
        currScreen
    ]
});

const screen1 = screen;

export {
    screen1,
    reloadPage,
    updateInventory
}