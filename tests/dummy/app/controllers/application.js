import Controller from '@ember/controller';

export default Controller.extend({
  testValue: "",
  testValue1: "",
  testValue2: "",
  testValue3: "",
  testValue4: "",
  testValue5: "",
  testValue6: "",
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
