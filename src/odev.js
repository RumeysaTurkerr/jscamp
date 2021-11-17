//Bir sayının asal sayı olup olmadığını bulan fonksiyon
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let count = 0
       for (let j = 2; j < numbers[i]; j++) {
          if (numbers[i] % j == 0 ) {
              count++
            }
          if(count == 0){
              console.log(numbers[i] + " : Asal sayı")
          }    
          else{
              console.log(numbers[i] + " : Asal sayı değil.")
          }
       }
    }
}
findPrime(3,22,12,23,467)
//Bir sayının tamsayı bölenlerinin toplamı
function sumOfDivisors(number) {
    let total = 0

    for (let i = 1; i < number; i++) {
       if (number % i == 0) {
           total = total + i
       }
    }
    return total
}
//İki sayının arkadaş sayı olup olmadığını bulan fonksiyon
function amicableNumbers(number1, number2) {
    if (sumOfDivisors(number1) == number2 && sumOfDivisors(number2) == number1) {
        console.log(number1 + " ve " + number2 + " Arkadaş sayılar")
    }
    else{
        console.log(number1 + " ve " + number2 + " Arkadaş sayı değil")
    }
}

amicableNumbers(220,284)

console.log("-------------------------------------")
//Mükemmel sayı
let total2 = 0
for (let i = 0; i < 1000; i++) {
   for (let j = 0; j < i; j++) {
      if (i%j==0) {
          total2 +=j
      } 
      if (total2==i) {
          console.log(i)
      }
   }
   total2=0
}

console.log("-------------------------------------")
//1000'e kadar olan asal sayılar
let count =0
for (let i = 1; i <=1000; i++) {
    for (let j = 2; j <i; j++) {
        if (i%j ==0) {
           count++ 
        }
    }
    if (count==0) {
        console.log(i)
    }
    count =0
}