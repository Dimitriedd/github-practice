//declare a function that takes in an array and returns a new array with all the items multiplied by 10
var arr1 = [3, 9, 15, 4, 10]
timesTen = (arr) =>{
    return newArr = arr.map(value => value * 10)
}
console.log(timesTen(arr1));

//delcare a function that takes in an array and uses .filter to output a new array
var arr2 = [2, 7, 3, 5, 8, 10, 13]
onlyOdds=(arr)=>{
    return newArr = arr.filter(value => {
        if(value%2!==0){
            return value
        }
    })
}
console.log(onlyOdds(arr2));

//declare a function that takes in an array of numbers and letters and returns only the letters, use typeOf method
var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

onlyLets = (arr) => {
    return newArr = arr.filter(value => {
        if(typeof value === "string"){
            return value
        }
    })
}
console.log(onlyLets(combo_arr));

//delcare a function sortPets and it takes in an array argument and sorts out the cats
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
];
sortPets=(arr)=>{
    return arr.filter(value=>{
        if(value.type==="cat"){
            return value
        }
    })
}
console.log(sortPets(animals));

sortPetNames=(arr)=>{
    let newArr = arr.filter(value=>
        value.type==="cat"
    )
    return newArr2 = newArr.map(value =>
        value.name
    )
}
console.log(sortPetNames(animals));

//declare a function  noVowels that removes vowels from a given string argument
var str ="javascript is awesome"
noVowels=(str1)=>{
    let vowels=["a","e","i","o","u"]
    let arr = str1.split('')
    let newArr = arr.filter(value=>{
        if(vowels.indexOf(value)===-1){
            return value
        }
    })
    return newArr.join("")
}
console.log(noVowels(str));

//declare a function that merges two arrays, takes in two arrays as arguments, and then goes through the two arrays and compares them to see if there is more than one instance of a number and removes the second if there is

var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

twoArrs = (arr1,arr2) => {
    let newArr1 = arr1.filter((value, index)=>{
        return arr1.indexOf(value) == index
    })
    let newArr2 = arr2.filter((value, index)=>{
        return arr2.indexOf(value) == index
    })
    let newArr = newArr2.filter(value=>{
        if(newArr1.indexOf(value)===-1){
            return value
        }

    })
    return newArr.concat(newArr1)
}

console.log(twoArrs(arr1,arr2));
