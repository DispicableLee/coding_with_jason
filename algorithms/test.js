let arrayOfObjects = [
    {
        _id: 1,
        name: "Fred"
    },
    {
        _id: 2,
        name: "George"
    }
]

function findIndexOfObjectInObjectArray(array, id){
    return array.findIndex(obj => obj._id === id)
}

console.log(findIndexOfObjectInObjectArray(arrayOfObjects, 0))