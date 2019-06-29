function FindWord(str,alpha){

    if(str[0]==alpha){
        console.log(str[1])
    }else if(str[str.length-1]==alpha){
        console.log(str[str.length-2])
    }else{
        var i = str.indexOf(alpha);
        console.log(str[i-1],str[i+1]);
    }

}
str = "IBHUBS"
FindWord(str,'S')