import * as main from 'main';
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

/*SKINS*/
const barSkin = new Skin({ fill: '#F48FB1' });
const backgroundSkin = new Skin({ fill: '#F8BBD0' });
const cardSkin = new Skin({ fill: '#FCE4EC' });
const buttonUnpressedSkin = new Skin({ fill: '#757575' });
const buttonPressedSkin = new Skin({ fill: '#424242' });

/*LABEL TEMPLATES*/
const titleStyle = new Style({ font: "italic 70px Roboto", color: "#757575" });
const regularStyle = new Style({ font: "20px Roboto", color: "#757575", vertical: "middle"});
const buttonStyle = new Style({ font: "16px Roboto", color: "#FAFAFA"});
const tinyStyle = new Style({ font: "12px Roboto", color: "#757575", horizontal: "middle"});

const titleText = Label.template($ => ({ style: titleStyle, string: $.string }));
const regularText = Label.template($ => ({ style: regularStyle, string: $.string }));
const buttonText = Label.template($ => ({ style: buttonStyle, string: $.string }));
const tinyText = Label.template($ => ({ style: tinyStyle, string: $.string }));

/*OBJECTS*/
let filteredInventoryItems = [];

/*TOP BAR*/
const backButton = Picture.template($ => ({
    left: 0, width: 40,
    active: true,
    behavior: Behavior({
        onTouchEnded: back
    })
}))

const topBar = Container.template($ => ({
    left: 0, right: 0, top: 0, height: 30,
    contents: [
        backButton(),
        new Label({ string: 'Inventory' })
    ]
}));

/*SEARCH PAGE*/
let nameInputSkin = new Skin({ borders: { left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray' });
let fieldStyle = new Style({ color: 'black', font: 'bold 24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldHintStyle = new Style({ color: '#aaa', font: '24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });
const searchField = Container.template($ => ({ 
    width: 250, height: 36, skin: nameInputSkin, contents: [
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
                            filteredInventoryItems = main.inventoryItems.splice().filter(element => { return element.tags.include(data.name) });
                            //TODO: Reload search view
                        }
                    },
                }),
                Label($, {
                    left: 4, right: 4, top: 4, bottom: 4, style: fieldHintStyle,
                    string: "Tap to add text...", name: "hint"
                }),
            ]
        })
    ]
}));

const searchBox = Container.template($ => ({
    height: 50, top: 0, bottom: 0,
    contents: [
        searchField({ name: "" })
    ]
}));

const itemCard = Column.template($ => ({
    top: 5, bottom: 5, left: 5, right: 5,
    skin: cardSkin,
    contents: [
        $.item.img(),
        regularText({ string: $.item.name })
    ]
}));

function createSearchPageContents() {
    /*CREATES A TWO COLUMN LIST OF ITEMS*/
    const contents = [];
    for (let i = 0; i < filteredInventoryItems.length - 1; i += 2) {
        const row = new Line({
            left: 0, right: 0, top: 0, bottom: 0,
            contents: [
                itemCard({ item: filteredInventoryItems[i] }),
                itemCard({ item: filteredInventoryItems[i + 1] })
            ]
        });
        contents.push(row);
    }
    if (filteredInventoryItems.length % 2 == 1) {
        const last_row = new Line({
            left: 0, right: 0, top: 0, bottom: 0,
            contents: [
                itemCard({ item: filteredInventoryItems[-1] })
            ]
        });
        contents.push(last_row);
    }
    return contents;
}

const searchResults = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: createSearchPageContents()
}));

const searchPage = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: backgroundSkin,
    contents: [
        VerticalScroller($, { 
            active: true, top: 50, bottom: 0,
            contents: [
                searchResults(),
                VerticalScrollbar(), 
                TopScrollerShadow() 
            ]                     
        }),
        // searchBox()
    ]
}))

/*ITEM VIEW PAGE*/
const descriptionContainer = Column.template($ => ({
    left: 0, right: 0, top: 10, bottom: 0,
    contents: [
        new regularText({ style: tinyText, string: "Name: " + $.item.name }),
        new regularText({ style: tinyText, string: "Closet: " + $.item.closet }),
        new regularText({ style: tinyText, string: "Category: " + $.item.category }),
        new regularText({ style: tinyText, string: "Brand: " + $.item.brand }),
        new regularText({ style: tinyText, string: "Size: " + $.item.size }),
        new regularText({ style: tinyText, string: "Tags: " + $.item.tags.join(", ") }),
    ]
}));

const retrieveButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 20,
    skin: buttonSkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container, data) {
            this.item = $.item;
            if (!main.inventoryItems.includes(this.item)) {
                container.skin = buttonPressedSkin;
            }
        },
        onTouchEnded: function(container) {
            if (main.inventoryItems.includes(this.item)) {
                main.retrieveItem(this.item);
                container.skin = buttonPressedSkin;
            }
        }
    }),
    contents: [
        new buttonText({ string: "Retrieve" })
    ]
}));

const favoriteButton = Column.template($ => ({
    left: 5, right: 5, top: 5, height: 20,
    skin: buttonSkin,
    active: true,
    behavior: Behavior({
        onCreate: function(container, data) {
            this.item = $.item;
            if (main.favoritedItems.includes(this.item)) {
                container.skin = buttonPressedSkin;
            }
        },
        onTouchEnded: function(container) {
            if (!main.favoritedItems.includes(this.item)) {
                main.favoriteItem(this.item);
                container.skin = buttonPressedSkin;
            } else {
                main.unfavoriteItem(this.item);
                container.skin = buttonUnpressedSkin ;
            }
        }
    }),
    contents: [
        new buttonText({ string: "Favorite" })
    ]
}));

const itemView = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        $.item.img({ height: 130 }),
        descriptionContainer({ item: $.item }),
        new Line({
            contents: [
                favoriteButton({ item: $.item }),
                retrieveButton({ item: $.item })
            ]
        })
    ]
}));

/*MAIN SCREEN*/
let screen = searchPage;

export {
    screen
};