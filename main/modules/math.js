export function mul(a,b) {
    if(isNaN(a) || isNaN(b)) {
        return 'invalid params'
    } else {
        return parseFloat(a)*parseFloat(b);
    }
}

export function add(a, b) {
    if(isNaN(a) && isNaN(b)) {
        return 'invalid params'
    } else {
        return parseFloat(a)+parseFloat(b);
    }
}
