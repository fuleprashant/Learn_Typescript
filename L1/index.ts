//  in this lecture we learn the basic of the typescript .. why it is type based javascript framework and how can we get the type of all datatypes for that code is below

const allData = (num1:number,num2:number , printresult:boolean ,someText:String) => {
    if (printresult) {
     return  `${someText} are ${num1+num2}`
 }else{
        return num1+num2;
    }
 }
 
 const printesult = true;
 
 const n1 = 1;
 const n2 = 2;
 const someText = "the result is"
 console.log(allData(n1,n2,printesult,someText))
 
 // here upper is the basic example of the code which is upper side first simple code of the javascript