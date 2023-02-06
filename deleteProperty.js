const deleteProperty = (arr) => {
  // Write your code here.
  
    if (Object.keys(arr[0]) == arr[1]) {
      delete arr[Object.keys(arr[0])];
      return "YES";
    } else {
      return "NO";
    }
};

const getProperty = deleteProperty([
  {
   lastName:'Mithila',
  },'lastName'
﻿]);
console.log(getProperty);




// const deleteProperty =(arr)=>{
//   // Write your code here.
//     let obj = arr[0];
//     let keyName = Object.keys(obj);
    
//       if ( keyName == arr[1]) {
//         delete obj[keyName];
//         return "YES";
//       } else {
//         return "NO";
//       }
//   }
