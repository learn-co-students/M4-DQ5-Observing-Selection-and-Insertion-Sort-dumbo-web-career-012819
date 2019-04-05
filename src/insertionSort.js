function insertionSort(arr) {

  for(i = 0; i < arr.length; i++){
    while(arr[i - 1] > arr[i]){
      actual = arr[i] ;
      arr[i] = arr[i - 1];
      arr[i - 1] = actual;
      i = i - 1;
    }
  }
}
