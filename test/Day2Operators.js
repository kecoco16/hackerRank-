
function day3 (mealCost, tipPercent, taxPercent) {
  const tip = mealCost * tipPercent / 100
  const tax = mealCost * taxPercent / 100
  const MealCost = Math.round(mealCost + tip + tax)
  return `The total meal cost is ${MealCost} dollars.`
}

export default day3
