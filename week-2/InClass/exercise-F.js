const username = (user) => {
    if (user.charAt(0) === user.charAt(0).toUpperCase() && user.length > 5 && user.length < 10) {
        return "Usuario Valido"
    }else if (user === "admin" || user === "manager") {
        return "Usuario Valido"
    }else {
        return "Usuario invalido"
    }
}

console.log(username("Oswaldo"));
console.log(username("admin"));
console.log(username("oswaldo"));
console.log(username("mirna"));