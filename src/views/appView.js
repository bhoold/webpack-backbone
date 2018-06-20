import $ from 'jquery';
import BaseView from './baseView';

const AppView =  BaseView.extend({
	el: $("#app"),
	template: require("../pages/layout.hbs"),
	events: {
		'input [b-input="formData.color"]': "onColorChange",
		'input [b-input="formData.size"]': "onSizeChange",
		
	},
	onColorChange: function(e) {
		var value = e.currentTarget.value;
		this.model.set('title', value);
		return false;
	},
	onSizeChange: function(e) {
		var value = e.currentTarget.value;
		this.model.set('body', value);
		return false;
	},
	setColor: function() {
		this.$('h1').text(this.model.get('title'));
	},
	setSize: function() {
		this.$('.body').text(this.model.get('body'));
	},


	initialize: function() {
		console.log(window.v = this)


		this.listenTo(this.model,'change:title',this.setColor);
		this.listenTo(this.model,'change:body',this.setSize);
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

export {
	AppView
}