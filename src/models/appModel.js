import BaseModel from './baseModel';

const AppModel =  BaseModel.extend({
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