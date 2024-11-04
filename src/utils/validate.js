
export const checkValidData = (email, password) => {
    let isValidEmail = /^([a-z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"
}