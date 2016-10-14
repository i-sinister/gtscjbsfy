import moment = require('moment');
export function sayHello(name: string) {
	return `Hello ${name} from typescript at ${ moment() }`;
}
