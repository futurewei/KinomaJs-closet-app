/*SKINS*/
const barSkin = new Skin({ fill: '#70D5DD' })
const backgroundSkin = new Skin({ fill: '#FFFFFF' });
const cardSkin = new Skin({ fill: '#FCE4EC' });
const topBarSkin = new Skin({ fill: '#70D5DD'})
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

export {
	topBarSkin,
	barSkin,
	backgroundSkin,
	cardSkin,
	buttonUnpressedSkin,
	buttonPressedSkin,
	titleStyle,
	regularStyle,
	buttonStyle,
	tinyStyle,
	titleText,
	regularText,
	buttonText,
	tinyText
}