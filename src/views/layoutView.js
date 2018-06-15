import BaseView from './baseView';

export default BaseView.extend({
	el: "layout",
	events: {

	},
	initialize() {
		console.log(this)
	},
	render() {
		return this;
	}
});