  /////////////////////////////////////////////////
  ////////////////  SNACK 1  //////////////////////
  /////////////////////////////////////////////////  

  // var zucchine = [
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   },
  //   {
  //     varieta : 'romanesca',
  //     peso : 1 ,
  //     lunghezza : parseInt('30')+ "cm"
  //   }
  // ];

  // var pesoTot = 0;
    
  // for(var zucchina of zucchine){
    
  //   var pesoZucc = zucchina['peso'];
  //   pesoTot = pesoTot + pesoZucc;
    
  // }
  // console.log(pesoTot);





  ///////////////////////////////////////////////
  //////////////  SNACK 2  //////////////////////
  ///////////////////////////////////////////////  

// var zucchine = [
//     {
//       varieta : 'romanesca',
//       peso : 3 ,
//       lunghezza : 10
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 50
//     },
//     {
//       varieta : 'romanesca',
//       peso : 2 ,
//       lunghezza : 55
//     },
//     {
//       varieta : 'romanesca',
//       peso : 10 ,
//       lunghezza : 7
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 11
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 44
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 35
//     },
//     {
//       varieta : 'romanesca',
//       peso : 2 ,
//       lunghezza : 4
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 6
//     },
//     {
//       varieta : 'romanesca',
//       peso : 1 ,
//       lunghezza : 13
//     }
//   ];

//   var arrCorte=[]; 
//   var arrLunghe=[];
//   var misura = 15
//   var lunghezzaZucc=0;
//   var pesoCorte = 0;
//   var pesoLunghe = 0;
//   for(var zucchina of zucchine){
    
//       lunghezzaZucc = zucchina['lunghezza'];
//       //console.log(lunghezzaZucc)
//       if(lunghezzaZucc < misura){
//         arrCorte.push(zucchina)
//         //console.log(arrCorte)
//         pesoCorte += zucchina['peso'];
//       }else{
//         arrLunghe.push(zucchina)
//         //console.log(arrLunghe)
//         pesoLunghe +=  zucchina['peso'];
//       }
//    }
//     console.log(pesoCorte)
//     console.log(pesoLunghe)
   



  ///////////////////////////////////////////////
  //////////////  SNACK 3  //////////////////////
  ///////////////////////////////////////////////

// var arrNumber=[
//   1,
//   2,
//   3,
//   4
// ]; 
// var arrLetters=[
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'g'
// ];
// var arrResult=[];

// var j = 0;

// for(var i = 0; i<arrNumber.length || j<arrLetters.length; i++){
  
//   arrResult.push(arrNumber[i]);
//   arrResult.push(arrLetters[j]);
//   j++
// }
// removeItemUndefined(arrResult, undefined)
// console.log(arrResult)


// function removeItemUndefined(arr, value) {
//   var i = 0;
//   while (i < arr.length) {
//       if(arr[i] === value) {
//           arr.splice(i, 1);
//       } else {
//           ++i;
//       }
//   }
//   return arr;
// }



  ///////////////////////////////////////////////
  //////////////  SNACK 4  //////////////////////
  ///////////////////////////////////////////////

var squadra = [];
for(var i = 0; i < 5; i++){
  playerGenerator(squadra)
}

console.log(squadra);




////// FUNCTION //////
function playerGenerator(arrSquadra){
  var points = Math. floor(Math. random() * 101);
  var three = Math. floor(Math. random() * 101);
  var randomString = '';
  var chars = "0123456789";
  for (var i=0; i<3; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomString += chars.substring(rnum,rnum+1);
  }
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i=0; i<3; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomString += chars.substring(rnum,rnum+1);
  }
  //console.log(randomString);

   arrSquadra.push({
     playerCode: randomString,                             //  INSERIRE UN OGGETTO DA UTENTE NELL'ARRAY
     averagePoints: points ,          
     threePoints :three
   });
   //console.log(arrSquadra);
}