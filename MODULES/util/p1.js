const util = require('util')

//template
let myTemplate = `Hi %s, welcome to %s and duration of this course is %d months`;

let u1 = util.format(myTemplate, "Ram", "Node js", 1.4)
let u2 = util.format(myTemplate, "Rani", "React js", 1.2)

console.log('user 1 =', u1)
console.log('user 2 =', u2)