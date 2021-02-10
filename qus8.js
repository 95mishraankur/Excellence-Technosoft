function SortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
array.sort(SortOrder("id"));   

for (var item in array) {    
    console.log( + array[item].id);    
}    
    

