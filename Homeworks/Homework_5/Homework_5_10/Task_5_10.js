let arr=[-23, 13, 45, 0, -345, -2, -56, 87];
let min=arr[0];
let i=1;
let check = (ar,int)=>(int<ar.length?(int++,list(ar,int)):(console.log(`END!`),console.log(`${min}`)));
let list=(arr,i)=>(arr[i]<min?(min=arr[i],check(arr,i)):check(arr,i));
list(arr,i);