
export const ValidateData = (email,password)=>{

        const ValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

        const ValidatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

        if(!ValidateEmail) return "Email is not valid";

        if(!ValidatePassword) return "Password is not valid";

        return null;

}