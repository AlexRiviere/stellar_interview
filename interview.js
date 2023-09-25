// Imagine you are writing software for a machine that dispenses coins (quarters, dimes, nickles, and pennies). The machine is connected to a cash register which sends the required amount in fractional dollars (example: 0.83 or 83 cents).

// Your code should accept a dollar value and return the fewest number of coins required to make correct change.

// # Something like...

// make_changer(0.83) # => {quarter:3, dimes:0, nickles: 1, pennies: 3}

/*
**Problem**
=>objective: given a float that represents amount of fractional dollars, return an object that represents the change with the FEWEST number of coins

=>input: 
	- float
  - can be > 1 dollar
  - 

=>output: 
	- object => names of the types of coins as keys, number of those types as values

=>requirements:

=>explicit  - have to return the change combination that has the FEWEST number of coins
            - the values of the object are as small as they can be

=>implicit  - 

=> test/edge cases - 


=> Mental Model: Describe the solution in 1-2 sentences. 
- for each type of coin (starting from quarter -> dime -> nickle -> pennie) subtract their value from the running total of change that is owed until the amount of change that is owed is less than the value of the type of coin. 
- eventually, get all the way to 0 (using pennies)

**Data Structure**


**Implementation Notes**


**Algorithm**
- initialize `coinsToValue` object => keys names of the coins, values as value for 1 of the type of coin

- initialize `result` object => keys as names of coins, values all at 0
- initialize `runningTotal` => assigned to the value passed in ( * 100 )
- while loop (condition: `runningTotal` > 0 )
  - if runningTotal > 25
    - increment `result["quarter"]`
    - decrement runningTotal by 25
  - else if runningTotal > 10
    - increment `result["dime"]`
    - decrement runningTotal by 10
  - else if runningTotal > 5
    - increment `result["nickle"]`
    - decrement `runningTotal` by 5
  - else 
    - increment `result["pennie"]`
    - decrement runningTotal by 1
- return result

**Check algorithm against test cases
*/


function make_changer(change) {
  const coinsToValue = {
    "quarter": 25,
    "dime": 10,
    "nickel": 5,
    "pennie": 1,
  };

  let result = {
    "quarter": 0,
    "dime": 0,
    "nickel": 0,
    "pennie": 0,
  };

  let runningTotal = parseInt(change * 100);

  while (runningTotal > 0) {
    if (runningTotal >= 25) {
      result["quarter"]++;
      runningTotal -= 25;
    } else if (runningTotal >= 10) {
      result["dime"]++;
      runningTotal -= 10;
    } else if (runningTotal >= 5) {
      result["nickel"]++;
      runningTotal -= 5;
    } else {
      result["pennie"]++;
      runningTotal -= 1;
    }
  }

  console.log(result);
};


make_changer(0.83) // => {quarter:3, dimes:0, nickles: 1, pennies: 3}



// charlotte@mystellar.com
