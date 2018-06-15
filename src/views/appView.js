//import Handlebars from 'handlebars';
import $ from 'jquery';
import BaseView from './baseView';


let html = require('../pages/layout.html');

export default BaseView.extend({
	el: $("#app"),
	template: _.template(html),
	events: {
	    "click .icon":          "open",
	    "click .button.edit":   "openEditDialog",
	    "click .button.delete": "destroy"
	},
	initialize() {
		console.log(this.$)
		console.log(this.$$)
		this.model.bind('change', this.render);
		this.render();
	},
	render() {

		this.$el.html(this.template());

		return this;
	}
});