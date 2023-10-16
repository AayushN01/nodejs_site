var fs = require('fs');
// var fileData = fs.readFileSync('index.html');
var fileData = fs.readFile('index.html',function(err, data){
    if(err)
    {
        console.log('error:'+err);
    }else{
        console.log(data.toString())
    }
});
// console.log(fileData.toString());
console.log('program ended');