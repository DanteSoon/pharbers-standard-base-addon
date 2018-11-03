import Component from '@ember/component';
import layout from '../templates/components/base-input';

export default Component.extend({
  layout,
  positionalParams: ['params'],
  actions: {
    click: function() {
			//  发送到控制器中的方法，
			this.sendAction("act", this.get("value"));
		}
	}
});
