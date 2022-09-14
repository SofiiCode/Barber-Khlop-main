let days =0 
let height = 32;
function climb () {
    for(i=0; i<=height;i-=2) {
        i+=7;
        ++days;
        if(i>=height) break;  
    }
    
}
console.log(climb)