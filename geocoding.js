var fs = require("fs");
var text = fs.readFileSync("./coordinates.txt").toString('utf-8');
var textByLine = text.split("\n")
var array = [];
var location = {};
for(var i=0; i<textByLine.length; i++){
    
    if(textByLine[i].indexOf('Latitude')!== -1){       
        location["latitude"] = parseFloat(textByLine[i].split(" ")[4])
    }else if(textByLine[i].indexOf('Longitude')!== -1){
        location["longitude"] = parseFloat(textByLine[i].split(" ")[4])
    }
    JSON.stringify(location);
    if(location.longitude && location.latitude){
        array.push(location);
        location = {};
    }
}

console.log(JSON.stringify({data: array}))
    