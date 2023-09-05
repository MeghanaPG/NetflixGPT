import { useState } from "react";
import Header from "./Header"; 

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

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
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&(
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input 
                type="text" 
                placeholder="Email Address"
                className="p-4 my-4 w-full bg-gray-700"
                />
                <input 
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700"
                />
                <button 
                className="p-4 my-6 bg-red-700 w-full rounded-lg">
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