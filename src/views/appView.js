import $ from 'jquery';
import BaseView from './baseView';

export default BaseView.extend({
	el: $("#app"),
	template: require("../pages/layout.handlebars"),
	events: {
		'input [b-input="formData.color"]': "onColorChange",
		'input [b-input="formData.size"]': "onSizeChange",
		
	},
	onColorChange (e) {
		let value = e.currentTarget.value;
		this.model.set('formData.color', value);
		return false;
	},
	onSizeChange (e) {
		let value = e.currentTarget.value;
		this.model.set('formData.size', value);
		return false;
	},
	setColor() {
		this.$('[b-bind="formData.color"]').text(this.model.get('formData.color'));
	},
	setSize() {
		this.$('[b-bind="formData.size"]').text(this.model.get('formData.size'));
	},


	initialize() {
		console.log(window.v = this)

		this.listenTo(this.model,'change:formData.color',this.setColor);
		this.listenTo(this.model,'change:formData.size',this.setSize);
		this.render();
	},
	render() {

		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});