function isValidPassword(password, username) {

    if (password.length < 8) {
        return false; 
    }

    if (password.includes(' ')) {
        return false; 
    }

    if (password.includes(username)) {
        return false; 
    }

    return true;
}


let username = prompt(`Please enter your username`);

let password = prompt(`Please enter your password`);

if (isValidPassword(password, username)) {
    console.log(`My password is valid!`);
} else {
    console.log(`My password is not valid :(`);
}