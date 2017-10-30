    // Write your code here
    var tip = mealCost * (tipPercent/100);
    var tax = mealCost * (taxPercent/100);
    var totalCost = mealCost + tax + tip;
    totalCost = Math.round(totalCost);
    console.log("The total meal cost is " + totalCost + " dollars.");
    // Use console.log() to print to stdout