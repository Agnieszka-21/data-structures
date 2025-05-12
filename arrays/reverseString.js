function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) {
        return str;
    }
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
// Another way of reversing a string
function reverse2(str){
    //check for valid input just like in the previous function
    return str.split('').reverse().join('');
  }

// Two other ways of reversing a string
const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join(''); // using the spread operator ...

  
let result0 = reverse(1543652);
console.log(result0);
let result1 = reverse('My name is Agnieszka');
console.log(result1);

let result2 = reverse2('Hi My name is Agnieszka');
console.log(result2);

let result3 = reverse3('Hello My name is Agnieszka');
console.log(result3);

let result4 = reverse3('Hi there My name is Agnieszka');
console.log(result4);