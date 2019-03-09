//Desired result Print out all names except the name passed into 
//the nameFilter function 

//Sup Fucker
//You gonna fuck on me?
//So long, gay boys!

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function(filteredName) {
    var results = [] 
    for (var i = 0; i < people.length; i++) {
        let name = people[i].name
        if (name != filteredName) { // <---- if name not fileteredName
            results.push(name) // <---- save that shit here!!!!!
        }
}
    return results
}


// This shit is wrong...
// var filteredNames = nameFilter("Betty")


// log this
console.log(nameFilter("Betty"))
