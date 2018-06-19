import BaseModel from './baseModel';

export default BaseModel.extend({
	defaults: function() {
		return {
			title: "我是标题",
			body: "内容很多...",
			formData: {
				color: "白色",
				size: "8"
			}
		}
	}
});