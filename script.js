// Creating Arrays for the assignRandomValues function to randomly choose an index from.
const overviews = ["Insane", "Wow", "Great", "Oh dear", "Too bad", "Oh no! Damn... that's actually horrible"];
const assetClasses = ["Stocks", "leveraged Options", "ETF", "Real Estate properties","Bitcoins", "NFTs", "Pokemon Cards", "toilet paper"];
const profitOrLoss = ["rose", "grew", "surged", "dropped", "dumped", "plummeled"];
const callToAction = ["buy more right now", "wait for the next surge to sell", "sell them for a great profit", "hold them some longer", "cut losses quickly", "buy the dip"];
// Generating a random number between 0 (inclusive) and 100 (exclusive) to get a randomized profit or loss percentage between 0 and 99 inclusively.
const randomPercentage = Math.floor(Math.random() * 100);
let assignedValues = [];

const assignRandomValues = (overviews, assetClasses, profitOrLoss, callToAction, randomPercentage) => {
    // Generating random indices to base calculation ranges on
    let todaysOverview = overviews[Math.floor(Math.random() * 6)];
    let todaysAssetClass = assetClasses[Math.floor(Math.random() * 8)];

    if (overviews.indexOf(todaysOverview) < 3) {
        // Setting up a range of indices for returned values to choose from, based on a positive return.
        let todaysProfitOrLoss = profitOrLoss[Math.floor(Math.random() * 3)];
        let todaysCallToAction = callToAction[Math.floor(Math.random() * 3)];
        assignedValues.push(todaysProfitOrLoss, todaysCallToAction);
    } else if (overviews.indexOf(todaysOverview) >= 3) {
        // Setting up a range of indices for returned values to choose from, based on a negative return.
        let todaysProfitOrLoss = profitOrLoss[Math.floor(Math.random() * (6 - 3)) + 3];
        let todaysCallToAction = callToAction[Math.floor(Math.random() * (6 - 3)) + 3];
        assignedValues.push(todaysProfitOrLoss, todaysCallToAction);
    } else console.log('ERROR: Could not assign a value. overviews is missing one or more entries.');
    
    // Push the assigned values into the array to be able to return all variables from the function.
    assignedValues.push(todaysOverview, todaysAssetClass, randomPercentage);
    return assignedValues;
}

const createInvestorReport = values => {
    // Print an investor's report to the console, holding today's values for all of the variables.
    console.log(`${values[2]}! Your ${values[3]} ${values[0]} by ${values[4]}% since yesterday! As a smart investor, you probably know it already
    but you should certainly ${values[1]}! Thank you for choosing our service and have a great day.`)
}

// Calling the functions, resulting in a randomized investors report with every code execution.
assignRandomValues(overviews, assetClasses, profitOrLoss, callToAction, randomPercentage);
console.log(createInvestorReport(assignedValues));








