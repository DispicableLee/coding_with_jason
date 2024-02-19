/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 
 * 
 * the profit cannot be less than 0
 */
const maxProfit = (prices) => {
    let buy = prices[0]
    let profit = 0;
    for(let i = 1; i<prices.length; i++){

        sell = prices[i]
        let potentialProfit = sell - buy
        profit = Math.max(profit, potentialProfit)
        buy = Math.min(buy, prices[i])
    }
    return profit
};

/**
 * 17 X [13,9,5,2,1]
 * 13 X [9,5,2,1]
 * 9 X [5,2,1]
 * 5 X [2,1]
 * 2 X [1] 
*/

// let prices = [17,13,9,5,2,1]

                     i
// let prices = [17,20,13,7]
/**
 * Breaking down the problem to get to a final answer can be helpful
 * 
 * prices = [7,1,5,4,1, .... ]
 * 
 * You MUST buy the stock one of these days : 1, 2, 3
 * 
 * 
 * if you buy on day 1, then max profit is: -2
 * if you buy on day 2, then max profit is: 4
 * if you buy on day 3, then max profit is: -1
 * 
 * 
 */




// find pairs (i, j) such that i < j
// find any pairs with the greatest difference in which the second number comes after the first.

// 2. find the highest value in the array THAT COMES AFTER the lowest value.

// return the index of the highest value