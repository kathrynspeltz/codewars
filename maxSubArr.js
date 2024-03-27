/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers: 
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

var maxSequence = function (arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))


