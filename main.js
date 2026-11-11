function Addition(a, b) {
    return a + b
}

function multiplication(a, b) {
    return a * b
}

// function user () {
//     return {
//         nom : "Gin",
//         age : 24,
//         sexe : "M"
//     }
// }

// console.log(user()); 

let user = (nom, age, sexe) => {
    return {nom, age, sexe}
}

// export default user()

console.log(user("ben",12, "M")); 



// let tab = {
//     nom : "benatard", 
// }



// console.log(Addition(2,2))



// let add = () => {
//     return
// }