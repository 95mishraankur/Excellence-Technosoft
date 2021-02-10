function findDuplycates(num) {
    var obj = {};
    var output = [];

    num.forEach(function (item) {
      if(!obj[item])
          obj[item] = 0;
        obj[item] += 1;
    })

    for (var prop in obj) {
       if(obj[prop] >= 2) {
           output.push(prop);
       }
    }

    return output;

}

console.log(findDuplycates([1, 2, 2, 4, 5, 4, 7, 37, 7, 37 ]));
