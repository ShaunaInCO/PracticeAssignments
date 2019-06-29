function findType(list){
    var num=0;
    var str=0;
    var obj=0;
    for(let i=0;i<list.length;i++){
        switch(typeof(list[i])){
            case "number":
                    num++;
                    break;
            case "string":
                    str++;
                    break;
            default:
                    obj++;
     
    }
   
}
console.log(num,str,obj)
}
var arr=[1,2,3,"efa",{name:"sita"}]
findType(arr)