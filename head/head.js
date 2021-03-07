function head1(arr){
    return arr[0];
}
function tail(arr){
    l=arr.length
    return arr[l-1];
}
function min(arr){
    var min=Math.min.apply(null, arr);
    return min;
}
function max(arr){
    var min=Math.max.apply(null, arr);
    return min;
}

module.exports={head1,tail,min,max}

