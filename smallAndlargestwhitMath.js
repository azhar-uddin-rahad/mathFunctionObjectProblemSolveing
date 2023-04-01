// on three number find the smallest number
const a=5;
const b=20;
const c=10;

/* function findBigNum(a,b,c){
    if(a < b && a < c){
        console.log("small number is",a)
    }
   else if(b < c){
        console.log("small number is",b)
    }
    else{
        console.log("small number is",c)
    }
}

findBigNum(a,b,c) ; */
//return the small number on the many variable 
const result=Math.min(a,b,c);
//console.log(result);
//return the largest number on the many variable 
const resultLargestNum=Math.max(a,b,c);
console.log(resultLargestNum);

