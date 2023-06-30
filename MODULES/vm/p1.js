const vm = require('vm')

let user ={
    name : "Raj",
    email: "raj@gmail.com",
    mobile:"8795421312"
};

console.log('before =', user)

vm.createContext(user)
vm.runInContext(`name ="Manoj"; email="manoj@gmail.com"`,user)

console.log('after =',user)
