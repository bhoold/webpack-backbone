import Backbone from 'backbone';

var AppModel =  Backbone.Model.extend({
	defaults: function() {
		return {
			title: "我是标题",
			body: "内容很多..."
		}
	}
});

export {
	AppModel
}