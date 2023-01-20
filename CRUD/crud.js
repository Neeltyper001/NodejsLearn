// required modules

const fs = require('fs');
const pth = require('path');

const targetpth = pth.join(__dirname, '/sampledir');
console.log(targetpth);

// createFile
    // try{
    //     fs.writeFileSync(`${targetpth}`+`/creatfile.txt`,'This is the created file');    // <filepath,content inside the file>
    // }
    // catch (iferr){
    //     console.log('Oops thats an error name: '+iferr);
    // }

    txtfilepath = pth.join(`${targetpth}`,`/creatfile.txt`);
//readFile 
    // fs.readFile(txtfilepath,'utf8',(err,item)=>{
    //     if(err){
    //         console.log("There was an error!! name: "+err);
    //     }

    //     else{
    //         console.log(item+"\n");
    //     }
    // })

// UpdateFile or appendFile
    // fs.appendFile(txtfilepath,' this the appended txt',(err)=>{
    //     if(err){
    //         console.log("There was an error named: "+err);
    //     }
    //     else{
    //         console.log("File was succesfully appended!!");
    //     }
    // });
    updatedFilePath = pth.join(`${targetpth}`,`/createfile.txt`)

// Renaming the file (though not part of crud operations)
    // fs.rename(txtfilepath,`${updatedFilePath}`,(err)=>{
    //     if(err){
    //         console.log("There was an error : "+err)
    //     }

    //     else{
    //         console.log('Renamed the file successfully');
    //     }
    // })
    
    
// Delete File
    fs.unlinkSync(updatedFilePath);
