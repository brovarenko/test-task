const checkPromoCode = (num) => {
    //input check
   if(!Number.isInteger(num)  || num < 10000000 || num > 99999999) {
       return 0;
   };

   let currentNumber, nextNumber, previousNumber = 0, countPairs = 0, isAscending = true, sumEvenNum = 0, sumOddNum = 0;

   for (let i = 0; i < 8; i++) {
        // using modulo division take last digit from number
        currentNumber = num % 10;
        // remove last digit
        num = Math.floor(num / 10);
        nextNumber = num % 10;
        // find a pair of odd numbers
        if (previousNumber % 2 !== 0 && currentNumber % 2 !== 0 && nextNumber % 2 == 0) {
            // check order of numbers
            if (currentNumber >= previousNumber) {
                isAscending = false;
            };
            countPairs++;
        };
        // find sum of even and odd numbers
        if (currentNumber % 2 === 0) {
            sumEvenNum+=currentNumber;
        } else {
            sumOddNum+=currentNumber;
        }
        previousNumber = currentNumber;
    }

    if (countPairs >= 2) {
        if (isAscending) {
            return 2000;
        };
        return 1000;
    } else if (sumEvenNum > sumOddNum) {
        return 100;
    } else {
        return 0;
    }; 
}



