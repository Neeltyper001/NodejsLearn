const fs = require('fs');
const path = require('path');
const pth = require('path');

console.log(path.basename('index.js')); // gives the path of the file
console.log(path.dirname('index.js')); // gives the path of the directory

// *********** or **************//
console.log(__filename);
console.log(__dirname);

console.log(path.dirname('exp'));

// ********* combining the path of the file *********
console.log(path.join(__dirname, 'exp'));

// for(i=0; i<5; i++){
//     fs.writeFileSync(path.join(__dirname,'exp')+`/hello${i}.txt`,`File content in file ${i}`);
// }

fs.readdir(pth.join(pth.dirname('exp'),'/exp'),(err_oopsi,ingredients_inside)=>{
    // console.log(ingredients_inside);

    ingredients_inside.forEach((each_ingredient)=>{
        console.log(each_ingredient +" is a filename");
    })
})