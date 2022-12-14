// Лінійний пошук в масиві чисел
let arr = [12, 76, 1, 5, 97, 7, 9, 3, 0]

function search(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        };
    };
    return -1;
};

console.log('Індекс шуканого елемента :' + ' ' + search(arr, 5));

//Лінійник пошук в масиві з об єктів

let arr1 = [
    {index : 21, userName : 'John' , age : 44 , occupation : 'plumber'},
    {index : 12, userName : 'Ann' , age : 32 , occupation : 'dentist'},
    {index : 67, userName : 'Sasha' , age : 25 , occupation : 'administrator'},
    {index : 11, userName : 'Smit' , age : 18 , occupation : 'developer'},
    {index : 7, userName : 'Frank' , age : 90 , occupation : 'fireman'},
    {index : 98, userName : 'Tom' , age : 40 , occupation : 'policeman'},
];

function search1(arr, item){
    for(let i = 0; i< arr.length; i++){
        if(arr[i].userName == item){ 
            return i+1 // +1 для того, щоб рахувати з 1 :)
        }
    }
    return -1
}

console.log('Індекс шуканого елемента :' + ' ' + search1(arr1, 'Ann'))

//Лінійний пошук масива в масиві

let arr2 = [[12,545,1],[1,5,90],[77,12,9],[5,8,0]];


function search2(arr, el){
  for (let j = 0; j < arr.length; j++)
  for (let i = 0; i < arr[j].length; i++){
    if (arr[j][i] === el){
      return 'Індекс масива' +' ' +j + ' ' + ',' + ' ' + 'Індекс елемента в масиві '+i;
    }
  }
  return -1;
}

console.log(search2(arr2, 9))