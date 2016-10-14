var moment = require('moment');
function sayHello(who) {
	return "Hello " + who + "from javascript at " + moment();
}
exports.sayHello = sayHello;
