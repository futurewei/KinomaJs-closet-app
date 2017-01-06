import {
    inventoryItems,
    allItems,
    favoritedItems
} from 'items';
import * as style from 'style';
import topbar from 'topbar';
import listView from 'listView';
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

/*DON'T TOUCH ANYTHING ABOVE*/

function favoriteResults() {
    return listView({ list: favoritedItems, changeScreen })
};


 let firstPage = favoriteResults; //Change this to the first page of the tab.
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
    if (states.length > 1) {
        states.pop();
        changeScreen(states.pop());
        reloadPage();
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

const screen2 = screen;

export {
    screen2,
    reloadPage
}
