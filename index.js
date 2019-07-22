var fs = require("fs");

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
var name = "rankings_users_2019-07-22-07-49-09-22-3";
var content = fs.readFileSync(name+".json");
content = JSON.parse(content);
users = content.users;

var arraySet = chunkArray(users, 10);

arraySet.map((data, index) => {
    console.log(data.length);
    console.log(name+(index+1)+'.json');
    var file = content;
    file.users = data;
    file = JSON.stringify(file)
    fs.writeFile('output/'+name+'-'+(index+1)+'.json', file, 'utf8', (res) => {
        
    });
});
console.log("END");