import 'lodash';
import $ from 'jquery';
import Backbone from 'backbone';

let AppView =  Backbone.View.extend({
	el: $("#app"),
	template: require("../pages/layout.hbs"),
	events: {
		'input [b-input="formData.color"]': "onColorChange",
		'input [b-input="formData.size"]': "onSizeChange"
		
	},
	onColorChange(e) {
		let value = e.currentTarget.value;
		this.model.set('title', value);
		return false;
	},
	onSizeChange(e) {
		let value = e.currentTarget.value;
		this.model.set('body', value);
		return false;
	},
	setColor() {
		this.$('h1').text(this.model.get('title'));
	},
	setSize() {
		this.$('.body').text(this.model.get('body'));
	},
	testBabel() {
		let a = 2;
		const aa = 2342;
		return c =a + aa;
	},


	initialize() {
		console.log(window.v = this)


		this.listenTo(this.model,'change:title',this.setColor);
		this.listenTo(this.model,'change:body',this.setSize);
		this.render();
	},
	render() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

export {
	AppView
}