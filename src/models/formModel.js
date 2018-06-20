import BaseModel from './baseModel';

export default BaseModel.extend({
	defaults: function() {
		return {
			color: "白色",
			size: "8"
		}
	}
});