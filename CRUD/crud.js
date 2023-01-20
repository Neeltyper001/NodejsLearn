// required modules

const fs = require('fs');
const pth = require('path');

const targetpth = pth.join(__dirname, '/sampledir');
console.log(targetpth);

// createFile
try{
    fs.writeFileSync(`${targetpth}`+`/creatfile.txt`,'This is the created file');    
}
catch (iferr){
    console.log('Oops thats an error name: '+iferr);
}
