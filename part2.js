//********Simplifying Big O Expressions */

function logAtLeast5(n){
    for(var i=1; i<= Math.max(5, n); i++){
        console.log(i);
    }
}


logAtLeast5(10);

function logAtMost5(n){
    for(var i=1; i<= Math.min(5, n); i++){
        console.log(i);
    }
}


logAtMost5(10);