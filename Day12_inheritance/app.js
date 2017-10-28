class Student extends Person {
    constructor(firstName, lastName, id, scores) {
       super(firstName, lastName, id)
       this.scores = scores
   }
    calculate(){
       const suma = this.scores.reduce((anterior,actual) => anterior + actual,0)
       const promedio = suma / this.scores.length
               
       if (promedio < 40) return "T"
        
       if (promedio < 55) return "D"
        
       if (promedio < 70) return "P"
        
       if (promedio < 80) return "A"
        
       if (promedio < 90) return "E"
        
       return "O"    
   }
}