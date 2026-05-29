let arr=[-13, 45, 0, -2, 87];
let sum=0;
let i=0;
let check = (arr,i,sum)=>(i<arr.length-1?(i++,summator(arr,i,sum)):(console.log(`END!`),console.log(`${sum}`)));
let summator=(arr,i,sum)=>(sum+=arr[i],check(arr,i,sum));
summator(arr,i,sum);