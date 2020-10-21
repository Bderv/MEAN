var changeType = {}
cents = 0

function coinChange(amount){
    cents = amount % 100
    dollars = Math.floor(amount/100)
    changeType['Dollars'] = dollars
    if(cents != 0){
        quarters = Math.floor(cents/25)
        changeType["Quarters"] = quarters
        if(cents != 0){
            lessThanAQuarterLeft = cents % 25
            dimes = Math.floor(lessThanAQuarterLeft/10)
            changeType["Dimes"] = dimes
            lessThanADimeLeft = lessThanAQuarterLeft % 10
            nickels = Math.floor(lessThanADimeLeft/5)
            changeType["Nickels"] = nickels
            lessThanANickelLeft = lessThanADimeLeft % 5
            pennies = Math.floor(lessThanANickelLeft/1)
            changeType["Pennies"] =  pennies
        }
    }
    console.log(changeType)
}

console.log(coinChange(268))
console.log(coinChange(24))




// function coinChange(amount){
//     if amount > 25
//     quarters = Math.floor(amount%25)
//     amount = amount - quarters*25
//     console.log(quarters)
//     dimes = Math.floor(amount%10)
//     amount = amount - dimes*10
//     console.log(dimes)
//     nickels = Math.floor(amount%5)
//     amount = amount - nickels*5
//     console.log(nickels)
//     pennies = Math.floor(amount)
//     amount = amount - pennies
//     console.log(pennies)

//     return (amount)
// }

