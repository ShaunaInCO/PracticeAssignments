function RightToVote(detail){
   return detail.age>=18
}
list = [{name:"ram",age:18},{name:"setha",age:17},{name:"ramesh",age:21}]
console.log(list.filter(RightToVote));