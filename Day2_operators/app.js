
function mealCost(mealCost, tipPercent, taxPercent){
    // Write your code here
        const tip = mealCost*tipPercent/100
        const tax = mealCost*taxPercent/100
        const MealCost = Math.round(mealCost+tip+tax)
        
      // Use console.log() to print to stdout
        console.log(`The total meal cost is ${MealCost} dollars.`)
}

mealCost(12.00, 20, 8)