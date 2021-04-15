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

// for(let c of "")
// let word="";
// const set = [];
// for(let i of text){
//     if(i!=' ') word+=i;
//     else{
//         set.push(word);
//         word = "";
//     } 
// }
// console.log(set);

const set = text.split(' ');

for(let i of set){
    if(!res[i]) res[i]=0;
    res[i]++;
}
delete res[''];
// console.log(res);

 const arr = [];
// console.log(Object.keys(res));

for(let i in res){
    let m = [i, res[i]];
    arr.push(m);
}
// console.log(JSON.stringify(arr,null, 2));

fs.writeFileSync("1.json", JSON.stringify(arr));


/*
[
    ["word", 1],
    ["word", 1],
    ["word", 1],
]
*/