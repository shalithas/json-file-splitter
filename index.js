var fs = require("fs");
const args = require('yargs').argv;

/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param chunk_size {Integer} Size of every group
 */
function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        
        tempArray.push(myChunk);
    }

    return tempArray;
}

console.log("START");

if(!args.file){
    console.error('No file name given');
    return false;
}

var size = 100;

if(args.size){
    size = args.size;
}

var name = args.file.replace('.json', '');
var content = fs.readFileSync(name+".json");
content = JSON.parse(content);
users = content.users;

var arraySet = chunkArray(users, size);

arraySet.map((data, index) => {
    var file = content;
    file.users = data;
    file = JSON.stringify(file)
    fs.writeFile('output/'+name+'-'+(index+1)+'.json', file, 'utf8', (res) => {
        
    });
});
console.log("END");