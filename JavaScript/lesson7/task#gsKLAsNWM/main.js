
//*Через Array.prototype. створити власний foreach, filter

Array.prototype.myForeach = function(callback){
    for(let i=0; i<nums.length; i++){
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback){
    const result = [];
    for(let i=0; i<nums.length; i++){
        if(callback(this[i], i,this)){ result.push(this[i]); }
    }
    return result;
}
