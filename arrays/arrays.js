const strings= ['a', 'b', 'c', 'd'];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push - add a new item to the end of the array
//O(1)
strings.push('e'); 

//pop - remove the last item in the array
//O(1)
strings.pop();
strings.pop();

//unshift - add an item at the beginning of the array
//O(n)
strings.unshift('x')

//splice - go to a specific index (2), don't delete any items (0), insert an item ('alien') at that index
//O(n)
strings.splice(2, 0, 'alien');

console.log(strings)