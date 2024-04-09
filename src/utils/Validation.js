
export const checkValidData =(email,password)=> {

    // const isNameValid = /\b([a-zÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "Enter Valid Name";
    if(!isEmailValid) return "Enter Valid Email address";
    if(!isPasswordValid) return "Password is not Valid"; 

    return null;
};