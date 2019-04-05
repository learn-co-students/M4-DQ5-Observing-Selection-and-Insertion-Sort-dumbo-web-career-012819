function selectionSort(arr) {
  for(i = 0; i < arr.length; i++){
    smallIdx = i;

    for(j = i + 1;j < arr.length; j++){

        if(arr[j] < arr[smallIdx]){
          smallIdx = j;
        }
      }
      changed = arr[i];
      arr[i] = arr[smallIdx];
      arr[smallIdx] = changed;
  }
}
