//looping on string

/* function stringLoop(str){
   
    for(i=0; i<str.length;i++){
        let element=str[i] ;
        console.log(element);
    }
}
stringLoop(text)
 */

function stringLoopReverse(str){
    let reverse=''
    for(i=str.length-1; i>=0;i--){
        let element=str[i] ;
       reverse= reverse + element;
        console.log(reverse);
    }
    return reverse;
}

let text="I want to be web developer";
stringLoopReverse(text)
