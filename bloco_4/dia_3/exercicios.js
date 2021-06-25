let n = 7;

// for(let i = 0; i<n; i+=1){
//   console.log('*'.repeat(n));
// }


// for(let i = 0; i<n; i+=1){
//   console.log('*'.repeat(i+1));
// }

// for(let i = 0; i<n; i+=1){
//   console.log(' '.repeat(n-i) + '*'.repeat(i+1));
// }


// for(let i = 0; i<n; i+=1){
//   if(n%2 === 0){
//     if((i+1)%2 === 0){
//       console.log(' '.repeat((n-(i+1))/2) + '*'.repeat(i+1) + ' '.repeat((n-(i+1))/2));
//     }
//     else{
//     }

//   }
//   else{
//     if((i+1)%2 === 0){
//     }
//     else{
//       console.log(' '.repeat((n-(i+1))/2) + '*'.repeat(i+1) + ' '.repeat((n-(i+1))/2));
//     }
//   }
// }

for(let i = 0; i<n; i+=1){
  if(i+1 === n){
    console.log('*'.repeat(n))
  }
  else{
    if((i+1)%2 === 0){
    }
    else{
      if(i+1 === 1){
        console.log(' '.repeat((n-(i+1))/2) + '*'.repeat(i+1) + ' '.repeat((n-(i+1))/2));
      }
      else{
        console.log(' '.repeat((n-(i+1))/2) + '*'.repeat(1) + ' '.repeat((i+1) - 2) + '*'.repeat(1) + ' '.repeat((n-(i+1))/2));
      }
    }
  }
}