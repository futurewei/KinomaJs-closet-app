import * as style from 'style';

const BAR_HEIGHT = 50;
const BACK_WIDTH = 50;
const LOGO_HEIGHT = BAR_HEIGHT;

const backButtonImg = Picture.template($ => ({ url: 'assets/topBarBackButton.png', left: 0, top: 0, bottom: 0, width: BACK_WIDTH }));

const backButton = Column.template($ => ({
	left: 0, top: 0, bottom: 0, width: BACK_WIDTH,
	visible: false, active: true,
	contents: [
		backButtonImg()
	],
	behavior: Behavior({
		onCreate: function(container, data) {
			this.back = $.back;
		},
		onTouchEnded: function(container) {
			container.visible = this.back();
			container.active = container.visible;
		}
	})
}));

const logo = Picture.template($ => ({
	url: 'assets/topBarLogo.png',
	height: LOGO_HEIGHT
}));

const topbar = Container.template($ => ({
	left: 0, right: 0, top: 0, height: BAR_HEIGHT,
	skin: style.topBarSkin,
	contents: [
		logo(),
		backButton({ back: $.back, states: $.states })
	]
}));

export default topbar;
