 var person = {
    firstName:"bob",
    lastName:"smith",
    carsWishList:[{color:"red",speed:"200kmph",Model:"a",FuelType:"petrol"},
    {color:"black",speed:"250kmph",Model:"h",FuelType:"petrol"},
    {color:"white",peed:"180kmph",Model:"c",FuelType:"desiel"}],
    carsOwned:[{color:"silver",speed:"200kmph",Model:"d",FuelType:"petrol"},
    {color:"maroon",speed:"250kmph",Model:"e",FuelType:"petrol"},
    {color:"grey",peed:"180kmph",Model:"f",FuelType:"desiel"}],
    addToOwned:function(newShowRoom,model){
        var val = check(newShowRoom.cars,model)
        this.carsOwned.push(newShowRoom.cars[val]);
        newShowRoom.cars.splice(val,1)

    },
    addToWish:function(newShowRoom,model){
      var val = check(newShowRoom.cars,model)
      if(check(this.carsWishList,model)==-1){
          this.carsWishList.push(newShowRoom.cars[val]);
          newShowRoom.cars.splice(val,1)
      }else{
        console.log("Car is already existed in your wishist!!")
      }
    }
  }
function check(arr,model){
  let i;
 
    for(i=0;i<arr.length;i++){

      if(arr[i].Model==model){
        return i;
      }
    }
    return -1;
}
var showRoom = {
    cars:[{color:"red",speed:"200kmph",Model:"g",FuelType:"petrol"},
         {color:"black",speed:"250kmph",Model:"h",FuelType:"petrol"},
          {color:"white",speed:"180kmph",Model:"i",FuelType:"desiel"}],
    Address:"dfvsdv"
  }
  
person.addToOwned(showRoom,'g')
person.addToWish(showRoom,'h')
console.log(person.carsOwned)
console.log(person.carsWishList)
console.log(showRoom)
