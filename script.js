console.log(process.argv);
if(process.argv.length === 2) {
    console.log("please enter argv"); 
    process.exit();
}

const fs = require("fs");
let text = fs.readFileSync(process.argv[2]);
text = text.toString();
console.log(text);

const res = {};

const set = text.split(' ');

for(let i of set){
    if(!res[i]) res[i]=0;
    res[i]++;
}
delete res[''];


 const arr = [];
// console.log(Object.keys(res));

for(let i in res){
    let m = {"word:" : res[i], "count" : i};
    arr.push(m);
}


fs.writeFileSync("1.json", JSON.stringify(arr));


/*
[
    ["word", 1],
    ["word", 1],
    ["word", 1],
]
*/
