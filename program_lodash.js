//install npm package in cmd, npm i -g npm
//install lodash package > npm i --save lodash    <---lodash a open soure package simplifies the programming by providing the funciotns and tools
//adding lodash packages go to the folder containing our app.js file cd project_folder ---> npm init 
//run the program as > node app rather then node app.js

//simple program using lodash modules

const lodash = require('lodash');
let random1 = lodash.random(10,100);

lodash.times(10,()=>{
 console.log(lodash.random(10,100));   
});


let arr = [2,5,"trr",89];
console.log(lodash.shuffle(arr));
