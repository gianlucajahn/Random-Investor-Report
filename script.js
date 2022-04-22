// Creating Arrays for the assignRandomValues function to randomly choose an index from.
const overviews = ["Insane", "Wow", "Great", "Oh dear", "Too bad", "Oh no! Damn... that's actually horrible"];
const assetClasses = ["Stocks", "leveraged Options", "ETF", "Real Estate properties","Bitcoins", "NFTs", "Pokemon Cards", "toilet paper"];
const profitOrLoss = ["rose", "grew", "surged", "dropped", "dumped", "crashed"];
const callToAction = ["buy more right now", "wait for the next surge to sell", "sell them for the great profit", "hold them some longer", "cut losses quickly", "buy the dip"];
// Calculating a random number between 0 (inclusive) and 100 (exclusive) to generate a randomized profit or loss percentage between 0% and 99%.
const randomPercentage = Math.floor(Math.random() * 100);

const assignRandomValues = (overviews, assetClasses, profitOrLoss, randomPercentage, callToAction) => {
    let todaysOverview = overviews[Math.floor(Math.random() * 6)];
    let todaysAssetClass = assetClasses[Math.floor(Math.random() * 8)];

    if (overviews.indexOf(todaysOverview) < 3) {
        let todaysProfitOrLoss = profitOrLoss[Math.floor(Math.random() * 3)];
        let todaysCallToAction = callToAction[Math.floor(Math.random() * 3)];
    } else if (overviews.indexOf(todaysOverview) >= 3) {
        let todaysProfitOrLoss = profitOrLoss[Math.floor(Math.random() * (6 - 3)) + 3];
        let todaysCallToAction = callToAction[Math.floor(Math.random() * (6 - 3)) + 3];
    } else console.log('ERROR: Could not assign a value. overviews is missing one or more entries.');
}








