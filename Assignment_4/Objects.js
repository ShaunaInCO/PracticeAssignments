function Objects(list){
    var obj = {}
    for(let i=0;i<list.length;i++){
        obj[list[i]] = count(list,list[i])
        
    }
    return obj;
   
}
function count(list,val){
    var count=0;
    for(let i=0;i<list.length;i++){
        if(list[i]==val){
            count++;
        }
    }
        
    return count;
}
 var list=["a","a","b","e","d"]
console.log(Objects(list))