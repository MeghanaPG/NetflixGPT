import React from 'react'
// Header of netflix will have the Netflix Logo and 
const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
        className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt = "logo"
        />
        <div className="flex p-2">
          <img 
          className="w-12 h-12"
          width="50" height="15"
          alt="usericon" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PE_d9489lEd42O4p_dq-hZWOWa9a13HY6Ko775w&amp;s"
          />
          <button className="font-bold text-white">(Sign Out)</button>
        </div>
    </div>
  )
};

export default Header;
