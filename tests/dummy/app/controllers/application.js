import Controller from '@ember/controller';

export default Controller.extend({
  testValue: "",
  actions: {
        next() {
			console.log("lalala");
        },
        cancel(params) {
			console.log(params);
        },
        search(params) {
			console.log(params);
        },
	}
});
