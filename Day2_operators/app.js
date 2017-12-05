const main = (mealCost, tipPercent, taxPercent) => {
  const tip = mealCost * tipPercent / 100
  const tax = mealCost * taxPercent / 100
  const MealCost = Math.round(mealCost + tip + tax)

  console.log(`The total meal cost is ${MealCost} dollars.`)
}

main(12.0, 20, 8)
