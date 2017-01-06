import Pins from 'pins';/* HELPER FUNCTIONS AND OBJECTS */class Item {    constructor(name, closet, category, brand, size, index, tags=[]) {        this.name = name        this.closet = closet        this.category = category        this.brand = brand        this.size = size        this.tags = tags        this.url = this.getUrl()        this.index = index        this.img = Picture.template($ => ({            height: ($ === undefined || $.height === undefined) ? 100 : $.height,            url: this.url        }));    }    getCamelCase() {        const words = this.name.split(" ");        const rest = words.slice(1);        let result = words[0].toLowerCase();        for (let i = 0; i < rest.length; i += 1) {            result += rest[i].slice(0, 1).toUpperCase() + rest[i].slice(1).toLowerCase();        }        return result;    }    getUrl() {        return "assets/" + this.getCamelCase() + ".png";    }}/*ALL ITEMS*/const allItems = {                8: new Item("Necklace", "Chicago", "Accessory", "De Beers", 0,                8, ["accessory", "accessories", "jewelry", "necklace", "pearl", "pearls"]),                3: new Item("Blazer", "New York", "Tops", "Yoins", 4,                3, ["blazer", "tops", "top", "classy", "b&w", "women"]),                2: new Item("Tank", "New York", "Tops", "", 4,                2, ["tank", "tops", "top", "red", "casual", "tank", "top"]),                1: new Item("Blouse", "New York", "Tops", "Yoins", 4,                1, ["blouse", "tops", "top", "classy", "purple", "women"]),                11: new Item("Stilettos", "New York", "Footwear", "Levis", 30,                11, ["stilettos", "footwear", "shoes", "casual", "red", "heels"]),                5: new Item("Shorts", "New York", "Bottoms", "Yoins", 4,                5, ["shorts", "bottoms", "bottom", "pants", "classy", "white", "women"]),                6: new Item("Jeans", "New York", "Bottoms", "Levis", 30,                6, ["jeans", "bottoms", "bottom", "pants", "casual", "gray", "long"]),                4: new Item("Skirt", "New York", "Bottoms", "", 4,                4, ["skirt", "bottoms", "bottom", "pants", "casual", "skirt", "top"]),                7: new Item("Bag", "New York", "Accessory", "Yves Saint Laurent", 0,                7, ["bag", "accessory", "accessories", "black", "classy", "b&w"]),                10: new Item("Boots", "New York", "Footwear", "Jimmy Choo", 5,                10,  ["boots", "footwear", "shoes", "black", "classy", "b&w"]),                9: new Item("Sunglasses", "New York", "Accessory", "Jimmy Choo", 0,                9,  ["shades", "sunglasses", "accessory", "shoes", "accessories", "purple", "classy", "b&w"]),                12: new Item("Tennis", "New York", "Footwear", "Nike", 6,                12  ["tennis", "footwear", "purple", "casual", "women"])};// const inventoryItems = [allItems[1], allItems[3], allItems[4], allItems[7], allItems[9]];const inventoryItems = [2, 3, 5, 6].map(element => { return allItems[element] });const favoritedItems = [allItems[1], allItems[4]];function favoriteItem(item) {    if (!favoritedItems.includes(item)) {        favoritedItems.push(item);        return true;    }    return false;}function unfavoriteItem(item) {    for (let i = 0; i < favoritedItems.length; i += 1) {        if (favoritedItems[i].index == item.index) {            favoritedItems.splice(i, 1);            return true;        }    }    return false;}function addItem(item) {    if (!inventoryItems.includes(item)) {        inventoryItems.push(item);        inventoryItems.sort(function(i, j) {            if (i.index < j.index) return -1;            if (i.index > j.index) return 1;            return 0;        });        return true;    }    return false;}function retrieveItem(item) {    for (let i = 0; i < inventoryItems.length; i += 1) {        if (inventoryItems[i].index == item.index) {            inventoryItems.splice(i, 1);            removeFromCloset(item);            return true;        }    }    return false;}/*DIRECT DEVICE COMMUNICATION*/let remotePins;function addToCloset(item) {    remotePins.invoke("/closetSpaceSensor" + item.index + "/write", 1);}function removeFromCloset(item) {    remotePins.invoke("/closetSpaceSensor" + item.index + "/write", 0);    }function connectToPins(application) {    application.active = true;    let discoveryInstance = Pins.discover(        connectionDesc => {            trace("FOUND!\n");            if (connectionDesc.name == "pins-share-led") {                trace("Connecting to remote pins\n");                remotePins = Pins.connect(connectionDesc);                for (let i = 1; i <= 8; i += 1) {                    const arg = "/closetSpaceSensor" + i + "/read";                    remotePins.repeat(arg, 83, value => {                        if (inventoryItems.includes(allItems[i]) && !value) {                            if (retrieveItem(allItems[i])) {                                removeFromCloset(allItems[i]);                                application.bubble('reloadInventory');                            }                        } else if (!inventoryItems.includes(allItems[i]) && value) {                            addItem(allItems[i]);                            addToCloset(allItems[i]);                            application.bubble('reloadInventory');                        }                    });                }            }        },        connectionDesc => {            if (connectionDesc.name == "pins-share-led") {                trace("Disconnected from remote pins\n");                remotePins = undefined;            }        }    );}export {    addItem,    retrieveItem,    favoriteItem,    unfavoriteItem,    allItems,    inventoryItems,    favoritedItems,    addToCloset,    removeFromCloset,    connectToPins}