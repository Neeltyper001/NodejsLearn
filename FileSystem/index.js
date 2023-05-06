const fs = require('fs');
const path = require('path');
const pth = require('path');

console.log("Line 0: "+path.basename('example.js'));
console.log("Line 1: "+path.basename('index.js')); // gives the path of the file
console.log("Line 2: "+path.dirname('index.js')); // gives the path of the directory

// *********** or absolute directory path name **************//
console.log("Line 3: "+__filename);
console.log("Line 4: "+__dirname);

console.log("Line 5: "+path.dirname('exp'));

// ********* combining the path of the file *********
console.log("Line 6: "+path.join(__dirname, 'exp'));

// for(i=0; i<5; i++){
//     fs.writeFileSync(path.join(__dirname,'exp')+`/hello${i}.txt`,`File content in file ${i}`);
// }

fs.readdir(pth.join(pth.dirname('exp'),'/exp'),(err_oopsi,ingredients_inside)=>{
    // console.log(ingredients_inside);

    ingredients_inside.forEach((each_ingredient)=>{
        console.log(each_ingredient +" is a filename");
    })
})