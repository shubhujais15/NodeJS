// I created this file to write all the math related functions and call these functions from another file

function add(a,b){
    return a+b;
}

// It is public function until we export it
// module is an object
// module.exports = add;


function sub(a,b){
    return a-b;
}

module.exports = {add,sub}


// we can also export as
// exports.add = (a,b) => a+b;
// exports.sub = (a,b) => a-b;