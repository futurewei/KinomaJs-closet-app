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
import buttonBar from 'buttonBar';
import designComponent from 'designComponent';
/*DON'T TOUCH ANYTHING ABOVE*/


var global_top;
var global_top2;
var global_item1;
var global_item2;
var global_item3;
var global_item4;
var item_dict;
var retrivedMode=false;
var addFavorite=false;

const categorizedItems = [
    [allItems[3], allItems[2], allItems[4]],
    [allItems[6], allItems[7], allItems[8]],
    [allItems[5], allItems[10], allItems[12]],
    [allItems[1], allItems[9], allItems[11]]
]

let currItems = [allItems[3], allItems[6], allItems[5], allItems[1]]; 


const HEIGHT = 100;
const WIDTH = 65;

const designView = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        buttonBar({ itemList: currItems }),
        designerSpace()
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            container.delegate('update', container[1]);
        }
    })
}));

const designerSpace = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [0, 1, 2, 3].map(element => {
        return designComponent({ itemsList: categorizedItems[element], row: element });
    }),
    behavior: Behavior({
        updateItems: function(container, index, row) {
            currItems[row] = categorizedItems[row][index];
            this.update(container);
        },
        update: function(container) {
            trace(currItems + '\n');
            container.container.replace(container.container[0], buttonBar({ itemList: currItems }));
        }
    })
}));


let firstPage = designView; //Change this to the first page of the tab.
/*DON'T TOUCH BELOW HERE*/

/*Changes the tabview to newScreen, where newScreen is some sort of container.
 * Note that newScreen is not a template, it is an actual container.
 */
function reloadPage() {
    states = [];
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

const screen0 = screen;

export {
    screen0,
    reloadPage
}