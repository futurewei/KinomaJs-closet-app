/*IMPORTS*/
import Pins from 'pins';
import {
    addItem,
    retrieveItem,
    inventoryItems,
    allItems,
    connectToPins
} from 'items';
import * as style from 'style';
import * as design from 'design';
import * as inventory from 'inventory';
import * as favorites from 'favorites';

const tabScreens = [design.screen0, inventory.screen1, favorites.screen2];
let activeTab = 0;
const TAB_HEIGHT = 90;

/*PAGE CONTROL*/
let currScreen = tabScreens[activeTab];


const tabButton = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
	active: true,
	contents: [
        new Label({ string: "This label is will be short lived. Soon after it's creation, a beautiful icon will take it's place and it will die a lonely death. Not quite unlike our own existence. What is our 'beautiful icon' you may ask? The supernova of our sun - a more majestic and much grander explosion than any of our insignifcant lives. It's dead week, and I'm tired." })
	],
	behavior: Behavior({
		onCreate: function(container, data) {
			this.index = $.index;
		},
		onTouchEnded: function(container) {
            if (activeTab != this.index) {
                loadScreen(this.index);
                setTabImgs();
            }
		}
	})
}));

const tabBar = new Column({
    height: TAB_HEIGHT, bottom: 0, left: 0, right: 0,
    contents: [
        new Line({
        	height: TAB_HEIGHT, bottom: 0, left: 0, right: 0,
        	skin: style.barSkin,
        	contents: [
        		tabButton({ name: 'designer', index: 0 }),
        		tabButton({ name: 'inventory', index: 1 }),
        		tabButton({ name: 'favorites', index: 2 })
        	]
        })
    ]
});


const mainScreen = new Column({
    left: 0, right: 0, top: 0, bottom: 0,
	skin: style.backgroundSkin, 
    contents: [
        currScreen,
        tabBar
    ],
    behavior: Behavior({
        onCreate: function(container, data) {
            setTabImgs();
        }
    })
});


/*HELPER FUNCTIONS*/
function setTabImgs() {
    for (let i = 0; i < 3; i += 1) {
        tabBar[0][i].replace(tabBar[0][i][0], getTabImg(['designer', 'inventory', 'favorites'][i], i == activeTab));
    }
}

function getTabImg(name, is_selected) {
    const suffix = is_selected ? 'Selected' : 'Unselected';
    return new Picture({ height: TAB_HEIGHT, url: "assets/" + name + "Button" + suffix + ".png" });
}

function loadScreen(index) {
    activeTab = index;
    let newScreen = tabScreens[index];
    mainScreen.replace(currScreen, newScreen);
    currScreen = newScreen;
}

function print(str) {
    trace(str + '\n');
}

application.behavior = Behavior({
    onLaunch: connectToPins,
    reloadFavorites: function() {
        favorites.reloadPage();
    },
    reloadInventory: function() {
        inventory.reloadPage();
    },
    reloadDesign: function () {
        design.reloadPage();
    },
    updateInventoryPage: function() {
        inventory.updateInventory();
    }
});

application.add(mainScreen);

