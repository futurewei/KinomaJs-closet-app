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
import * as style from 'style';
import * as items from 'items';
import buttonBar from 'buttonBar';

let nameInputSkin = new Skin({ borders: { left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray' });
let fieldStyle = new Style({ color: 'black', font: 'bold 24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldHintStyle = new Style({ color: '#aaa', font: '24px', horizontal: 'left',
    vertical: 'middle', left: 5, right: 5, top: 5, bottom: 5 });
let fieldLabelSkin = new Skin({ fill: ['transparent', 'transparent', '#C0C0C0', '#acd473'] });
let searchText = "";
const editField = Container.template($ => ({ 
    left: 40, top: 5, width: 200, height: 30, skin: nameInputSkin, contents: [
        Scroller($, { 
            left: 0, right: 0, top: 0, bottom: 0, active: true, 
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
                    },
                }),
                Label($, {
                    left: 0, right: 0, top: 0, bottom: 0, style: fieldHintStyle,
                    string: "Search", name: "hint"
                }),
            ]
        })
    ]
}));

const inputFields = [
        "Name",
        "Closet",
        "Category",
        "Brand",
        "Size",
        "Tags"
];

const descriptionContainer = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: inputFields.map(element => {
        let input;
        if (element == "Tags") {
            input = $.item[element.toLowerCase()].join(", ");
        } else {
            input = $.item[element.toLowerCase()];
        }
        return new Line({
            left: 0, right: 0, top: 0, bottom: 0,
            contents: [
                new Label({ width: 100, bottom: 27, style: style.regularStyle, string: element + ": " }),
                editField({ name: input }) 
            ],
            behavior: Behavior({
                onCreate: function(container, data) {
                    this.label = container[1][0][0];
                },
                pressedEnter: function() {
                    print("hi");
                    if (element == "Tags") {
                        $.item[element.toLowerCase()] = this.label.string.split(", ");
                    } else {
                        $.item[element.toLowerCase()] = this.label.string;
                    }
                }
            })
        })
    })
}));


const itemDescription = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        buttonBar({ itemList: [$.item] }),
        $.item.img({ height: 130 }),
        descriptionContainer({ item: $.item })
    ]
}));

function print(str) {
    trace(str + '\n');
}

export default itemDescription;
