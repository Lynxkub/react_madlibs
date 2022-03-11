const  addCommas = (num) => {
    const str = String(num).split("");
    if(str[0] === '-'){
        str.unshift();
    }
    const reverse = str.reverse();
    

    let answer = [];
    for(let i = 0; i < reverse.length; i++) {
        if(i % 3 === 0 && i !== 0){
            
            answer.push(',')
            answer.push(reverse[i])
        }else {
            answer.push(reverse[i])
        }
        
    }
        answer.reverse();
        if(str[0] === '-') {
            answer.shift('-')
        }
        return answer.join('');
   
    
}

module.exports = addCommas;