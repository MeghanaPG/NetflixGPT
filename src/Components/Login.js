import { useRef, useState } from "react";
import Header from "./Header"; 
import { checkValidDataSignInForm, checkValidDataSignUpForm } from "../Utils/validate";

const Login = () => {
    // Using useState Variable to toggle between sign in and sign up form.
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        // checkValidData(email, password)
        if(isSignInForm){

            console.log(email.current.value);
            console.log(password.current.value);

        const message = checkValidDataSignInForm(email.current.value, password.current.value);
        setErrorMessage(message);

        } else {

        console.log(name.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
        
        const message = checkValidDataSignUpForm(name.current.value, email.current.value, password.current.value);
        setErrorMessage(message);
    }
        // Sign / Sign Up 

    };

    const toggleSignInForm = () => {
        // If one of them is true, the other one will be false.
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt = "logo"
        />
            </div>
            <form onSubmit = {(e) => e.preventDefault()} 
            className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(
                    <input 
                    ref = {name}
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input 
                ref = {email}
                type="text" 
                placeholder="Email Address"
                className="p-4 my-4 w-full bg-gray-700"
                />
                <input 
                ref = {password}
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button 
                className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now": "Alread registered? Sign In Now" }
                </p>
            </form>
        </div>
    )
};
export default Login;