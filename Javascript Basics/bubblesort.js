function bubbleSort(arr)
{
    for (var i = 0; i < arr.length-1; i++){ //setting a for loop to get us to view all numbers in the array
        for (var j = 0; j < arr.length-i-1; j++){
            if (arr[j] > arr[j+1])  // checking to see if the number in the array on the left if bigger than the one ajdacent
            {
                var temp = arr[j];
                arr[j] = arr[j+1];  //Swapping positions inside the array
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort([2,4,1,6,5]))


function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// This function would be considered a 0(1), no Loops

function findNth(arr, n){
    console.log(arr[n]);
}
// This function would be considered a 0(1), no Loops

function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
// This function would be considered a 0(n), only 1 Loop

function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// This function would be considered a O(n^2), because it has for loops nested in for loops