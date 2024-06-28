// finding the largest number in an array

let arr = [1,3,4,34,32,43]
let max = arr[0]
for(i=1;i<arr.length;i++){
  if(max<arr[i]){
    max=arr[i]
  }
}
console.log(max);


// finding the second largest number in an array

let array = [12,35,1,7,23,18]
array.sort((a,b)=>b-a);
console.log(array[1]);
// output : 23

// finding the smallest number in an array


let array3 = [1,3,4,34,32,43]
let min = arr[0]
for(i=1;i<array3.length;i++){
  if(min>array3[i]){
    min=array3[i]
  }
}
console.log(min);

// sum of even numbers


let array2 = [2,1,3,4,5,6,8]
sum = 0;
for(i=0;i<array2.length;i++){
  if(i%2==0){
    sum+=array2[i]
  }
}
console.log(sum);


// find the odd numbers and push into a new array

let ar = [1,2,3,4,6,5,6,5]
odd = [];
for(i=0;i<ar.length;i++){
  if(ar[i]%2!==0){
    odd.push(ar[i])
  }
}
console.log(odd);