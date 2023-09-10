import React from 'react'
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

// Header of netflix will have the Netflix Logo and 
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      //Otherwise go to error Page
      navigate("/error");

    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        //User is signed in 
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL:photoURL 
        })
        ); 
        // As soon as the user signs in, we want to direct that user to the browse page 
        navigate("/browse");
    } else {
        // User is signed out
        dispatch(removeUser());
        // Navigate to the home page 
        navigate("/");
    }
});

//Unsubscribe when component unmounts  
return () => unsubscribe();
}, []);

const handleGptSearchClick = () => {
  //Toggle GPT Search
  dispatch(toggleGptSearchView());
};

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
};

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src= {LOGO} alt = "logo"/>
        {user && (
          <div className="flex p-2 justify-between">
            {showGptSearch && (
                <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
                </option> 
                ))}
            </select>
              )}  
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
          >
            {showGptSearch? "Home Page" : "GPT Search"}</button>
          <img 
          className="hidden md:block w-12 h-12"
          width="50" height="15"
          alt="usericon" 
          src= {user.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>
        )}
    </div>
  )
};

export default Header;
