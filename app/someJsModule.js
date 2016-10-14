var sayHello = require('./greet.js').sayHello;
function whoAreYou() {
	console.log(sayHello('javascript'));
}
module.exports = whoAreYou;
