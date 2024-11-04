
export const checkValidData = (email, password, userName) => {
    let isValidEmail = /^([a-z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let isValidUsername = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);

    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"
    if(!isValidUsername) return "UserName is not valid"
}