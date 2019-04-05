// function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // for (let i=0; i < arr.length ; i++) {
  //   let minIndex = i
  //   for(let k= i + 1; k < arr.length; k++){
  //     if(arr[minIndex] > arr[k]){
  //       minIndex = k
  //     }
  //   }
  //   if (minIndex !== i){
  //     let temp = arr[i]
  //     arr[i] = arr[minIndex]
  //     arr[minIndex] = temp
  //   }
  // }

  function selectionSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = selectionSort(arr.slice(0, mid));
    var subRight = selectionSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}
