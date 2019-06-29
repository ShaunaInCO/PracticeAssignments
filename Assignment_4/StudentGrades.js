function RemoveDuplicates(arr){
    var uniqueArray = []
    for(let i=0;i<arr.length;i++){
        if(check(uniqueArray,arr[i])==0){
            uniqueArray.push(arr[i]);
        }
    }

    StudentGrades(uniqueArray)

}
function check(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==val.id){
            return -1;
        }
    }
    return 0;

}
function StudentGrades(arr){
    var dist=0;
    var A=0,B=0,C=0,fail=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].gpa >= 8){
            dist++;
        }else if(arr[i].gpa >= 7 && arr[i].gpa < 8){
            A++;
        }else if(arr[i].gpa >= 6 && arr[i].gpa < 7){
            B++;
        }else if(arr[i].gpa >= 4 && arr[i].gpa < 6){
            C++;
        }else{
            fail++;
        }
    }
    console.log("Distinction:"+dist+" A grade:"+A+" B grade:"+B+" C grade:"+C+" Fail:"+fail)
}
arr = [{
    "name" : "John",
    "id": 1,
    "gpa" : 7.8
    },{
        "name" : "Rick",
        "id": 2,
        "gpa" : 3.9
        },{
            "name" : "John",
            "id": 1,
            "gpa" : 8.9
            },{
                "name":"lisa",
                "id":3,
                "gpa":8.5
            }]
RemoveDuplicates(arr)