 function main (input) {
<<<<<<< HEAD
   const dates = input.split('\n')
   const date = dates[0].split(' ').map(Number)
   const dateExpect = dates[1].split(' ').map(Number)
   const thisDate = new Date(date[2], date[1], date[0])
   const expectDate = new Date(dateExpect[2], dateExpect[1], dateExpect[0])
   let result = 0

   if (thisDate <= expectDate) {
     result = 0
   } else if (date[1] == dateExpect[1] && date[2] == dateExpect[2]) {
     result = 15 * (date[0] - dateExpect[0])
   } else if (date[2] == dateExpect[2]) {
     result = 500 * (date[1] - dateExpect[1])
   } else {
     result = 10000
   }
   console.log(result)
=======
    const dates = input.split("\n")
    const date = dates[0].split(" ").map(Number)
    const dateExpect = dates[1].split(" ").map(Number)
    const thisDate = new Date(date[2],date[1],date[0])
    const expectDate = new Date(dateExpect[2],dateExpect[1],dateExpect[0])
    let result = 0
    
    if (thisDate <= expectDate) {
        result = 0
    } else if (date[1] == dateExpect[1]  &&  date[2] == dateExpect[2]) {
        result = 15*(date[0] - dateExpect[0])
    } else if (date[2] == dateExpect[2]) {
        result = 500*(date[1] - dateExpect[1])
    } else {
        result = 10000
    }
  
    console.log(result)
>>>>>>> 06f0047aafcbe0b281d6976758884bd623e8130b
 }

 main(`9 6 2015
6 6 2015`)
