const extendHex = (shortHex) => {
    // write your code here
      // There may be hash present or not..
      let size=shortHex.length; 
  
      //our starting point should be either 0 or 1 depending on use case
      let i=size-3;
      let ans="#";
  
      let isCapital=false;
      //I'll have to check that if the perticular input contains the 
      while(i<size)
      {
          let curr=shortHex[i];
          let code=curr.charCodeAt();

          if(code>=65 && code<=90) isCapital=true;
          console.log(code,isCapital);
         ans+=curr+curr;

          i++;
      }

      return isCapital?ans.toUpperCase() : ans;
  };
  
  // Do not change the code below.
  const shortHex = prompt("Enter Short Hex.");
  alert(extendHex(shortHex)); 
  