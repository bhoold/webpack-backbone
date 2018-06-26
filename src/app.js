import 'babel-polyfill'
import {AppView} from './views/appView';
import {AppModel} from './models/appModel';


new AppView({
	model: new AppModel
})


