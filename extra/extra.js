const myArr=[]
// %DebugPrint(myArr)

//continous, Holey

//SMI(small integer)
//Packed Element
//Double(string,float,function)

const arrTwo=[1,2,3,4,5]
//Packed_SMI_Elements

arrTwo.push(6.0)
//Packed_Double_Elements

arrTwo.push('7')
//Packed_Elements

arrTwo[10]=11
//Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo,10)
//hasOwnProperty(Object.prototype,10)

//Holes are very expensive 


const arrThree=[1,2,3,4,5]
console.log(arrThree[2]); 
//SMI > Double > Packed
//H_SMI > H_Double > H_Packed


const arrFour=new Array(3)
//Just 3 holes, H_SMI_ELEMENTS
arrFour[0]='1' //HOLEY_ELEMENTS
arrFour[1]='2' //HOLEY_ELEMENTS
arrFour[2]='3' //HOLEY_ELEMENTS


const arrFive=[]
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS


const arrSix=[1,2,3,4,5]
arrSix.push(Infinity)

//for ,forEach, for-of
//cfjg