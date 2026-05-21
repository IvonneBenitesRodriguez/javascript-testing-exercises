function formatName(firstName, lastName){
    if(firstName === "" && lastName === ""){
        return false;
    }
    return `${lastName}, ${firstName}`;
}

function clamp(value, min, max){
    if(value === "" || value === "/" || value === "?"){
       return "invalid reply";
    }
if (value > min && value < max){
    return value;
};
if(value < min){
    return min;
} if(value > max){
    return max;
}
}


function slugify(text){
if( text === ''){
    return "invalid reply";
}
if(text.toUpperCase()){
 return text.trim().toLowerCase().replaceAll(' ','-');
} 
}

function truncate(text, maxLength) {
    if(text === ''){
        return "invalid reply";
    }
    if( text.length > maxLength){
        return text.slice(0, maxLength - 3) + '...';
    }
    return text;
}

function isLeapYear(year){
    if(year === ''){
        return 'invalid reply';
    } if( year % 400 === 0){
        return true;
    } if(year % 100 === 0){
        return false;
    } if(year % 4 === 0){
        return true;
    }
    return year;
}

function countOcurrences(text, char){
    if( text === ''){
        return "invalid reply";
    } if (char === '' ){
        return 'invalid reply';
    } 

    let count = 0;
    for(let i=0; i < text.length; i++){
        if(text[i] === char){
            count++;
        }
    }
    return count;
}
console.log(countOcurrences('Merry', 'r'));

module.exports = { formatName, clamp, slugify, truncate, isLeapYear, countOcurrences };

