function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i ++){
    let temp = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > temp){
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = temp
  }
  return arr
}
