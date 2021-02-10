 function findons(nums) {
    let lCount = 0;
    let curr = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            curr = 0;
        } else {
            curr++;
        };
        if (curr > lCount) lCount = curr;
    };
    return lCount;
};
 
console.log(findons(num=[0,0,1,1,0,0,0,1,0,0,1,1,1,1]))