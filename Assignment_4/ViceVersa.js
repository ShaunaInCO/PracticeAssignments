obj = {one:1,two:2,three:3}
console.log(obj)
function ViceVersa(obj){
    var newObj = {}
    var keys = Object.keys(obj);
    var values = Object.values(obj)
    for(let i=0;i<keys.length;i++){
        newObj[values[i]] = keys[i];
    }
    return newObj;
}
console.log(ViceVersa(obj))