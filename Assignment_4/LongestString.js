function LongestString(str){

    var arr = str.split(" ");
    var ind = 0;
    var len=0;
    for(let i=0;i<arr.length;i++){

        if(len<arr[i].length){
            ind = i;
            len = arr[i].length;
        }
    }
    return arr[ind]


}
str = "welcome hello world"
console.log(LongestString(str))